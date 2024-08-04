export interface ProjectDto {
    data: {
        data:ProjectContent[];
    }
}

export interface GalleryDto {
    id:number;
    sort:number;
    titre?:string;
    image:string;
    sousTitre?:string;
    description?:string;
    lien?:string;
}

export interface ProjectContent {
    id:number;
    sort:number;
    titre:string;
    illustration:string;
    description:string;
    garelies:GalleryDto[];
}

export interface AssociationInfoDto {
    data: {
        data:AssociationInfoContent;
    }
}

export interface AssociationInfoContent {
    logo: string;
    description_activite: string;
    nom: string;
    email: string;
    tel?: string;
    adresse: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    instagram: string;
    theard: string;
}