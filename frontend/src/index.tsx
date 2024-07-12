import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ContactUs from './pages/contact-us/ContactUs';
import Welcome from './pages/welcome/Welcome';
import reportWebVitals from './reportWebVitals';
import { ContentService } from './services/content.service';
import { Content } from './services/models/content';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// set meta data from content service
const contentData = ContentService.getMetaContent();
contentData.then((data) => {
  document.title = data.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  }
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && data.keywords) {
    console.log('setting keywords', data.keywords);
    metaKeywords.setAttribute('content', data.keywords);
  }
  const metaLinkTitle = document.querySelector('link[rel="icon"]');
  if (metaLinkTitle && data.linkTitle) {
    metaLinkTitle.setAttribute('href', data.linkTitle);
  }
});

let content: Content;
Promise.all([
  ContentService.getMenuContent(),
  ContentService.getMetaContent(),
  ContentService.getSubMenuContent(),
  ContentService.getFooterContent(),
  ContentService.getDescriptionAssociation(),
]).then(([menuContent, metaContent, subMenuContent, footerContent, descriptionContent]) => {
  content = {
    menu: menuContent,
    subMenu: subMenuContent,
    footer: footerContent,
    description: descriptionContent,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome {...content} />
    },
    {
      path: "contactez-nous",
      element: <ContactUs {...content} />
    },
  ]);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
});


