import { FooterContent, MenuContent, SubMenuContent } from "./menu";
import { ProjectContent, AssociationInfoContent } from "./projects";

export interface Content {
    menu: MenuContent;
    subMenu: SubMenuContent,
    footer: FooterContent
    description: string;
    projects: ProjectContent[];
    associationInfo?: AssociationInfoContent;
}