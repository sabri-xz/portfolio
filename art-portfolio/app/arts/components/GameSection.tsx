import ImageCard from "@/app/components/ImageCard";
import Link from "next/link";

type Image = {
    height: number;
    width: number;
    src: string;
}

type NewGame = {
    name: string;
    thumbnailSrc?: string;
    thumbnail: Image;
    gameLink: string;
    description: string;
}

const GameSection: React.FC<{ game: NewGame }> = ({ game }) => {
    let i = 0;

    return (
        <div className="px-4 py-8">
            <Link href={game.gameLink} className="">
                <ImageCard id={i} 
                    src={game.thumbnail.src} 
                    height={game.thumbnail.height} 
                    width={game.thumbnail.width} 
                    imageWidth={350}
                />
            </Link>
            <p>{game.description}</p>
        </div>
    );
}

export default GameSection;