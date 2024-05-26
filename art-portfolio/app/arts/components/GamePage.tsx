import GameGallery from "./GameGallery";

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}

const GamePage: React.FC<{gamesInfo: Game[]}> = ({ gamesInfo }) => {
    return (
        <div className="m-5 px-12">
            <h1 className='justify-self-center text-5xl'> Games </h1>
            <p> Here are some games that I have produced art for </p>
            <GameGallery gamesInfo={gamesInfo}/>
        </div>
    );
}

export default GamePage;