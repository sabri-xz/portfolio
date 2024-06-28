import Image from "next/image";
import { ImageWithDim } from "@/app/types";

export default function ImageCard({ id, imageWidth, img }: { id: number, imageWidth: number, img: ImageWithDim}) {
    let whRatio = img.height / img.width;
    let cardHeight = Math.ceil(imageWidth * whRatio);
    let padding = 1;
    let cardSpan = Math.ceil(cardHeight / 10) + padding;
    
    const sizes = `(max-width: ${imageWidth}px) 100vw, ${imageWidth}px`;
    
    return (
        <div key={id} className="justify-self-center"
             style={ {gridRow: `span ${cardSpan}`, width: imageWidth}}> 
            <div className="rounded-xl overflow-hidden group" 
                 style={{width: `${imageWidth}px`, height: `${cardHeight}px`, position: 'relative'}}>
                <Image 
                    src={img.src} 
                    alt="" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className='group-hover:opacity-60' 
                    sizes={sizes}
                />
            </div>
        </div>
    );
}