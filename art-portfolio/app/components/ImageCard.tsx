import Image from "next/image";

type Props = {
    id: string;
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
        <div className="justify-self-center rounded-lg" style={{ gridRow: `span ${cardSpan}`, width: "100%" }}>
            <div
                id={id}
                style={{
                    height: height,
                    width: width,
                }}
            >
                <Image src={src} alt='' width={width} height={height}
                sizes="250px" className="rounded-lg" />
            </div>
        </div>
    );
}