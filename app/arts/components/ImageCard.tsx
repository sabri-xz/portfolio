import Image from "next/image";

type Props = {
    id: number;
    height: number;
    width: number;
    src: string;
    imageWidth: number;
}

export default function ImageCard({ id, height, width, src, imageWidth }: Props) {
    let whRatio = height / width;
    let cardHeight = Math.ceil(imageWidth * whRatio);
    let padding = 1;
    let cardSpan = Math.ceil(cardHeight / 10) + padding;
    
    return (
        <div key={id} className="justify-self-center"
             style={ {gridRow: `span ${cardSpan}`, width: imageWidth}}> 
            <div className="rounded-xl overflow-hidden group" 
                 style={{width: `${imageWidth}px`, height: `${cardHeight}px`, position: 'relative'}}>
                <Image 
                    src={src} 
                    alt="" 
                    layout="fill"
                    objectFit="cover"
                    className='group-hover:opacity-60' 
                    placeholder='blur' 
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                />
            </div>
        </div>
    );
}