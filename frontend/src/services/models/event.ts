import { GalleryDto } from "./projects";

export interface EventDto {
    data:  {
        data: EventContent[];
    }
}

export interface EventContent {
    id:number;
    sort:number;
    titre:string;
    description:string;
    date_evenement: string;
    illustration: string;
    galleries:GalleryDto[];
}