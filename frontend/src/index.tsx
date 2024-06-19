import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContentService } from './services/content.service';
import { BrowserRouter } from 'react-router-dom';

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

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
