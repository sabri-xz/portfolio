import GameGallery from "./GameGallery";

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    caption: string;
    description: string;
}

const GamePage: React.FC<{gamesInfo: Game[]}> = ({ gamesInfo }) => {
    return (
        <div className="m-5 px-12 w-full">
            <h1 className='justify-self-center text-5xl font-medium'> Games </h1>
            <p className='mt-5 mb-10'> Here are some games that I have made art for </p>
            <GameGallery gamesInfo={gamesInfo}/>
        </div>
    );
}

export default GamePage;