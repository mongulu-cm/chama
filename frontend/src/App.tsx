import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu, { IPropsMenu } from './components/Menu/Menu';
import Abonnement from './pages/abonnement/Abonnement';
import Adhesion from './pages/Adhesion/Adhesion';
import ContactUs from './pages/contact-us/ContactUs';
import Event from './pages/event/Event';
import Project from './pages/project/Project';
import Welcome from './pages/welcome/Welcome';
import { ContentService } from './services/content.service';
import { Content } from './services/models/content';
import DetailsEvent from './pages/event/DetailsEvent';
import { AssociationInfoContent } from './services/models/projects';
import { FooterContent } from './services/models/menu';
import { CircularProgress } from '@mui/material';

class App extends React.Component<unknown, Content> {

    // inject matomo script


    componentDidMount(): void {
        this.getContent();
    }

    public getContent(): void {
        Promise.all([
            ContentService.getMenuContent(),
            ContentService.getMetaContent(),
            ContentService.getSubMenuContent(),
            ContentService.getDescriptionAssociation(),
            ContentService.getProjectsContent(),
            ContentService.getAssociationInfoContent(),
            ContentService.getEventsContent(),
            ContentService.getCarouselContent(),
        ]).then(([
            menuContent,
            metaContent,
            subMenuContent,
            descriptionContent,
            projectsDto,
            associationInfoContent,
            eventsContent,
            carouselContent,
        ]) => {
            const content = {
                menu: {...menuContent, logo: associationInfoContent.data.data[0].logo},
                subMenu: subMenuContent,
                footer: this.buildFooterContent(associationInfoContent.data.data[0]),
                description: descriptionContent,
                projects: projectsDto.data.data,
                associationInfo: associationInfoContent.data.data[0],
                events: eventsContent.data.data,
                carousel: carouselContent,
            };

            this.setState(content);
        })
            .catch((error) => {
                console.error(error);
                // go to the error page

            });

    }

    public buildFooterContent(associationInfo: AssociationInfoContent): FooterContent {
        return {
            tel: associationInfo.tel ?? '',
            adresse: associationInfo.addresse,
            email: associationInfo.email,
            socialLinks: [
                {
                    title: 'Facebook',
                    url: associationInfo.facebook,
                },
                {
                    title: 'Instagram',
                    url: associationInfo.instagram,
                },
                {
                    title: 'Twitter',
                    url: associationInfo.twitter,
                },
            ],
        };
    }

    render(): React.ReactNode {

        let innerHtml = <div className='w-full h-screen text-center flex justify-center items-center'><CircularProgress /></div>
        if (this.state) {
            const { menu, footer } = this.state;
            console.log("menu", menu);


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
                },
                {
                    path: '/adhesion',
                    element: <Adhesion {...this.state} />,
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
                logo: ContentService.api_url_assets + '/'+ menu.logo,
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

