import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu, { IPropsMenu } from './components/Menu/Menu';
import Abonnement from './pages/abonnement/Abonnement';
import ContactUs from './pages/contact-us/ContactUs';
import Project from './pages/project/Project';
import Welcome from './pages/welcome/Welcome';
import { ContentService } from './services/content.service';
import { Content } from './services/models/content';

class App extends React.Component<unknown, Content> {

    constructor(props: any) {
        super(props);
        this.getContent();

    }

    public getContent(): void {
        Promise.all([
            ContentService.getMenuContent(),
            ContentService.getMetaContent(),
            ContentService.getSubMenuContent(),
            ContentService.getFooterContent(),
            ContentService.getDescriptionAssociation(),
            ContentService.getProjectsContent(),
        ]).then(([
            menuContent,
            metaContent,
            subMenuContent,
            footerContent,
            descriptionContent,
            projectsDto
        ]) => {
            const content = {
                menu: menuContent,
                subMenu: subMenuContent,
                footer: footerContent,
                description: descriptionContent,
                projects: projectsDto.data.data,
            };

            this.setState(content);
        });

    }

    render(): React.ReactNode {

        let innerHtml = <div className='w-full h-full text-center'>...isLoading</div>
        if (this.state) {
            console.log('state', this.state);
            const { menu, footer } = this.state;
          

            const router = createBrowserRouter([
                {
                    path: '/',
                    element: <Welcome {...this.state} />,
                },
                {
                    path: '/projets',
                    element: <Project {...this.state} />,
                },
                {
                    path: '/nous-contactez',
                    element: <ContactUs {...this.state} />,
                },
                {
                    path: '/abonnement',
                    element: <Abonnement {...this.state} />,
                }

            ]);
            const menuProps: IPropsMenu = {
                ...menu,
                history: router,
            };
            innerHtml = (

                <div>
                    <Menu {...menuProps} />
                    <RouterProvider router={router} />
                    <Footer {...footer} />
                </div>
            );
        }
        return (
            innerHtml
        );
    }

}

export default App;

