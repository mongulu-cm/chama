import { EventContent } from "./event";
import { FooterContent, MenuContent, SubMenuContent } from "./menu";
import { AssociationInfoContent, ProjectContent } from "./projects";

export interface Content {
    menu: MenuContent;
    subMenu: SubMenuContent,
    footer: FooterContent
    description: string;
    projects: ProjectContent[];
    events: EventContent[];
    associationInfo?: AssociationInfoContent;
}