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
    date_created: string;
}

export interface AssociationInfoDto {
    data: {
        data:AssociationInfoContent[];
    }
}

export interface AssociationInfoContent {
    logo: string;
    description_activite: string;
    nom: string;
    email: string;
    tel?: string;
    addresse: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    instagram: string;
    theard: string;
    photo_president: string;
    nom_du_president: string;
    mot_du_president: string;
    helloasso_form: string;
}