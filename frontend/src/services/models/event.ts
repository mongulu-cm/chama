import { GalleryDto } from "./projects";

export interface EventDto {
    id:number;
    sort:number;
    titre:string;
    description:string;
    date_evenement: string;
    galleries:GalleryDto[];
}

export interface EventContent extends EventDto{}