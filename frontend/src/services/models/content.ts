import { FooterContent, MenuContent, SubMenuContent } from "./menu";
import { ProjectContent } from "./projects";

export interface Content {
    menu: MenuContent;
    subMenu: SubMenuContent,
    footer: FooterContent
    description: string;
    projects: ProjectContent[];
}