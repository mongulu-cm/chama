import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu, { IPropsMenu } from './components/Menu/Menu';
import Abonnement from './pages/abonnement/Abonnement';
import ContactUs from './pages/contact-us/ContactUs';
import Event from './pages/event/Event';
import Project from './pages/project/Project';
import Welcome from './pages/welcome/Welcome';
import { ContentService } from './services/content.service';
import { Content } from './services/models/content';
import DetailsEvent from './pages/event/DetailsEvent';

class App extends React.Component<unknown, Content> {


    componentDidMount(): void {
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
            ContentService.getAssociationInfoContent(),
            ContentService.getEventsContent(),
        ]).then(([
            menuContent,
            metaContent,
            subMenuContent,
            footerContent,
            descriptionContent,
            projectsDto,
            associationInfoContent,
            eventsContent,
        ]) => {
            const content = {
                menu: menuContent,
                subMenu: subMenuContent,
                footer: footerContent,
                description: descriptionContent,
                projects: projectsDto.data.data,
                associationInfo: associationInfoContent.data.data,
                events: eventsContent.data.data,
            };

            this.setState(content);
        })
            .catch((error) => {
                console.error(error);
                // go to the error page

            });

    }

    render(): React.ReactNode {

        let innerHtml = <div className='w-full h-full text-center'>...isLoading</div>
        if (this.state) {
            const { menu, footer } = this.state;


            const router = createBrowserRouter([
                {
                    path: '/',
                    element: <Welcome {...this.state}  />,
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
                },
                {
                    path: '/listes-evenements',
                    element: <Event {...this.state} />,
                },
                {

                    path: '/evenement/:id',
                    element: <DetailsEvent {...this.state} />,
                },

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

