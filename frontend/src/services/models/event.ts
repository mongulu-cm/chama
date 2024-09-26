import { GalleryDto } from "./projects";

export interface EventDto {
    data:  {
        data: EventContent[];
    }
}

export interface EventFilesDto {
    id:number;
    evenement_id?:string;
    directus_files_id?:string;
}

export interface EventContent {
    id:number;
    sort:number;
    titre:string;
    description:string;
    debut_periode: string;
    fin_periode: string;
    date_created: string;
    illustration: string;
    galleries:GalleryDto[];
    photos: EventFilesDto[];
}