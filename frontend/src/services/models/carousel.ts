
export interface CarouselContent {
    id: number;
    video?: string;
    galeries: number[];
}

export interface CarouselDto {
    data: {
        data: CarouselContent[];
    }
}