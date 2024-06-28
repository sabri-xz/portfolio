export type Image = {
    src: string,
    alt: string
}

export type ImageWithDim = Image & { 
    width: number; 
    height: number
}

export type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    caption: string;
    description: string;
}

export type NewGame = Game & { thumbnail: ImageWithDim }