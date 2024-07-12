import { FooterContent, MenuContent, SubMenuContent } from "./menu";

export interface Content {
    menu: MenuContent;
    subMenu: SubMenuContent,
    footer: FooterContent
    description: string;
}