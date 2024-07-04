/**
 * Service to manage content
 */

import { FooterContent, MenuContent, SubMenuContent } from "./models/menu";
import { MetaData } from "./models/meta-data";


export class ContentService {
    constructor() {
        console.log('Content service created');
    }
    /**
     * Get Meta content
     */
    public static getMetaContent(): Promise<MetaData> {
        return new Promise((resolve, reject) => {
            resolve({
                title: 'My title',
                description: 'My description',
                keywords: 'My keywords',
                linkTitle: 'My link title'
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
                        title: 'Acceuil',
                        url: 'acceuil',
                        component: 'Welcome'
                    },
                    {
                        title: 'Evenements',
                        url: 'listes-evenements',
                        component: 'Welcome'
                    },
                    {
                        title: 'Projects',
                        url: 'projets',
                        component: 'Welcome'
                    },
                    {
                        title: 'Contacts',
                        url: 'nous-contactez',
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
                title: 'Ceci est un titre de teaser pour Chama',
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
} 