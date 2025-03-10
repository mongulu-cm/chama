import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu, { IPropsMenu } from './components/Menu/Menu';
import Abonnement from './pages/abonnement/Abonnement';
import Adhesion from './pages/Adhesion/Adhesion';
import ContactUs from './pages/contact-us/ContactUs';
import Event from './pages/event/Event';
import Welcome from './pages/welcome/Welcome';
import { ContentService } from './services/content.service';
import { Content } from './services/models/content';
import DetailsEvent from './pages/event/DetailsEvent';
import { AssociationInfoContent } from './services/models/projects';
import { FooterContent } from './services/models/menu';
import { CircularProgress, Typography, Box } from '@mui/material';
import Project from './pages/project/Project';

interface IStateApp extends Content {
    error: boolean;
}

class App extends React.Component<unknown, IStateApp> {

    // inject matomo script


    componentDidMount(): void {
        this.getContent();
    }

    public getContent(): void {
        Promise.all([
            ContentService.getMenuContent(),
            ContentService.getSubMenuContent(),
            ContentService.getProjectsContent(),
            ContentService.getAssociationInfoContent(),
            ContentService.getEventsContent(),
            ContentService.getCarouselContent(),
        ]).then(([
            menuContent,
            subMenuContent,
            projectsDto,
            associationInfoContent,
            eventsContent,
            carouselContent,
        ]) => {
            if (!associationInfoContent?.data?.data?.[0]) {
                console.error("Données de l'association manquantes - Le site est en maintenance");
                this.setState({ error: true });
                return;
            }

            const content = {
                menu: {...menuContent, logo: associationInfoContent.data.data[0].logo},
                subMenu: subMenuContent,
                footer: this.buildFooterContent(associationInfoContent.data.data[0]),
                projects: projectsDto.data.data,
                associationInfo: associationInfoContent.data.data[0],
                events: eventsContent.data.data,
                carousel: carouselContent,
                error: false
            };
            this.setMetaData(content);
            this.setState(content);
        })
            .catch((error) => {
                console.error("Erreur lors du chargement des données:", error);
                this.setState({ error: true });
            });
    }

    public setMetaData(content: Partial<Content>): void {
        document.title = content.associationInfo?.nom ?? '';
        //favicon
        const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
        if (favicon && content.associationInfo?.logo) {
            favicon.href = ContentService.api_url_assets + '/' + content.associationInfo?.logo;
        }
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
        if (!this.state) {
            return <div className='w-full h-screen text-center flex justify-center items-center'><CircularProgress /></div>;
        }

        if (this.state.error) {
            return (
                <Box 
                    className='w-full h-screen text-center flex flex-col justify-center items-center'
                    sx={{ p: 3 }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Site en maintenance
                    </Typography>
                    <Typography variant="body1">
                        Nous sommes désolés, le site est temporairement indisponible. Veuillez réessayer plus tard.
                    </Typography>
                </Box>
            );
        }

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
        const innerHtml = (

            <div>
                <Menu {...menuProps} />
                <RouterProvider router={router} />
                <Footer {...footer} />
            </div>
        );
        return (
            innerHtml
        );
    }

}

export default App;

