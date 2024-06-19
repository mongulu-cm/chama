/**
 * Service to manage content
 */

import { MenuContent } from "./models/menu";
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
                        title: 'acceuil',
                        url: 'acceuil',
                        component: 'Welcome'
                    },
                    {
                        title: 'evenements',
                        url: 'listes-evenements',
                        component: 'Welcome'
                    },
                    {
                        title: 'projects',
                        url: 'projets',
                        component: 'Welcome'
                    },
                    {
                        title: 'contacts',
                        url: 'nous-contactez',
                        component: 'Welcome'
                    }

                ]

            } as MenuContent
            );
        });
    }
} 