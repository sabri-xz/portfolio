import Image from "next/image";

type Props = {
    id: number;
    height: number;
    width: number;
    src: string;
}

export default function ImageCard({ id, height, width, src }: Props) {
    let whRatio = height / width;
    let cardHeight = Math.ceil(250 * whRatio);
    let padding = 1;
    let cardSpan = Math.ceil(cardHeight / 10) + padding;
    
    return (
        <div key={id} className='justify-self-center w-[250px]'
             style={ {gridRow: `span ${cardSpan}`}}> 
            <div className="rounded-xl overflow-hidden group">        
                <Image src={src} alt="" 
                width={width} height={cardHeight} sizes="250px"
                className='group-hover:opacity-60' 
                placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='/>
            </div>
        </div>
    );
}