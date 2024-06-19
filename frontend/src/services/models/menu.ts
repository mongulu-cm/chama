export interface MenuContent {
    title: string;
    description?: string;
    keywords?: string;
    logo?: string;
    url?: string;
    items: MenuItem[];
}

export interface MenuItem {
    title: string;
    url: string;
    component: string;
    items?: MenuItem[];
}