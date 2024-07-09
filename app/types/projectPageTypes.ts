export type Image = {
    src: string,
    alt: string
}

export type ImageWithDim = Image & { 
    width: number; 
    height: number
}

export type Project = {
    name: string;
    link: string;
    caption: string;
    description: string;
}

export type Game = Project & { thumbnailSrc: string }

export type NewGame = Game & { thumbnail: ImageWithDim }

