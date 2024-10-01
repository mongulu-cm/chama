/**
 * Service to manage content
 */

import axios from "axios";
import { CarouselContent } from "./models/carousel";
import { EventDto } from "./models/event";
import { FooterContent, MenuContent, SubMenuContent } from "./models/menu";
import { MetaData } from "./models/meta-data";
import { AssociationInfoDto, ProjectDto } from "./models/projects";


export class ContentService {

    // public static api_url = `${process.env.REACT_APP_DIRECTUS_API_URL}/items`; // strange problem use dotenv
    // public static api_url = `${process.env.REACT_APP_DIRECTUS_API_URL}/items`;
    public static api_url = `https://directus.assos.mongulu.cm/items`;
    public static api_url_assets = `https://directus.assos.mongulu.cm/assets`;

    constructor() {
        console.log('Content service created');
        console.log(process.env);
    }
    /**
     * Get Meta content
     */
    public static getMetaContent(): Promise<MetaData> {
        return new Promise((resolve, reject) => {
            resolve({
                title: 'Aci grenoble',
                description: 'Association camerounaise de l\'isère',
                keywords: 'Cameroun, edutiant, association, isère',
                linkTitle: 'My link title',
                logoIcon: 'logo.02290fd5.png'
            });
        });
    }

    /**
     * Get Menu content
     */
    public static getMenuContent(): Promise<MenuContent> {
        return new Promise((resolve, reject) => {
            resolve({
                title: 'Main Menu',
                description: 'Menu principale',
                logo: 'logo.02290fd5.png',
                url: '/acceuil',
                items: [
                    {
                        title: 'Accueil',
                        url: '/',
                        component: 'Welcome'
                    },
                    {
                        title: 'Evenements',
                        url: '/listes-evenements',
                        component: 'Events'
                    },
                    {
                        title: 'Adhésion',
                        url: '/adhesion',
                        component: 'Adhesion'
                    },
                    // {
                    //     title: 'Projet',
                    //     url: '/projets',
                    //     component: 'Projects'
                    // },
                    {
                        title: 'Contacts',
                        url: '/nous-contactez',
                        component: 'Welcome'
                    }

                ]

            } as MenuContent
            );
        });
    }

    /**
     * Get SubMenu content
     */
    public static getSubMenuContent(): Promise<SubMenuContent> {
        return new Promise((resolve, reject) => {
            resolve({
                contactPhone: '514-555-5555',
                title: 'Bienvenue à l\'association camerounaise de l\'isère (ACI)',
                subscriptionButton: true,
                listIconLink: [
                    {
                        icon: 'phone',
                        url: 'tel:514-555-5555'
                    },
                    {
                        icon: 'email',
                        url: 'mailto:azera'
                    }
                ]
            } as SubMenuContent);
        });
    }

    /**
     * Get Footer content
     */
    public static getFooterContent(): Promise<FooterContent> {
        return new Promise((resolve, reject) => {
            resolve({
                tel: '514-555-5555',
                adresse: '6 RUE Berthe de Boissieux 38000 Grenoble',
                email: 'acigrenoble38@gmail.com',
                socialLinks: [
                    {
                        title: 'Facebook',
                        url: 'https://www.facebook.com/AssociationCamerounaiseDeLIsere'
                    },
                ]
            } as FooterContent);
        });
    }

    /**
     * Get description association
     */
    public static getDescriptionAssociation(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve("Bienvenue à l'association camerounaise de l'isère (ACI). Nous sommes une association à but non lucratif qui a pour objectif de promouvoir la culture camerounaise en Isère. Nous organisons des événements culturels, des ateliers, des rencontres et des échanges pour les membres de la communauté camerounaise et pour les personnes intéressées par la culture camerounaise. Nous sommes une association ouverte à tous et nous accueillons les personnes de toutes origines et de tous âges. Si vous souhaitez en savoir plus sur notre association, n'hésitez pas à nous contacter. Nous serons ravis de vous accueillir et de vous présenter nos activités.");
        });
    }

    /**
     * Get projects contents
     */
    public static getProjectsContent(): Promise<ProjectDto> {
        return axios.get(`${this.api_url}/project`);
    }

    /**
     * Get association info content
     */
    public static getAssociationInfoContent(): Promise<AssociationInfoDto> {
        return axios.get(`${this.api_url}/association_info`);
    }

    /**
     * Get Events content
     */
    public static getEventsContent(): Promise<EventDto> {
        return axios.get(`${this.api_url}/evenement?sort=-debut_periode&fields[]=*,photos.*`);
    }

    /**
     * Get Carousel content
     */
    public static async getCarouselContent(): Promise<CarouselContent> {
        return axios.get(`${this.api_url}/Carousel`).then((response) => {
            return ContentService.buildImageGalerie(response.data.data[0]);
        });
    }

    /**
     * Build image galerie
     */
    public static async buildImageGalerie(carousel: CarouselContent): Promise<CarouselContent> {
        const imagesUrl = carousel?.galeries.map((galerie) => {
            return `${this.api_url}/galerie/${galerie}`;
        });

        try {
            const imagePromises = imagesUrl.map(url => axios.get(url));
            const imageResponses = await Promise.all(imagePromises);
            const images = imageResponses.map(response => response.data.data.image);
            return {
                ...carousel,
                galeries: images
            };
        } catch (error) {
            console.error('Error fetching images:', error);
            throw error;
        }
    }
} 