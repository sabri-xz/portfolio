import GameGallery from "./GameGallery";

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}

const GamePage: React.FC<{gamesInfo: Game[]}> = ({ gamesInfo }) => {
    return (
        <div>
            <h1 className='justify-self-center text-xl'> Games </h1>
            <p> Here are some games that I am the artist for </p>
            <GameGallery gamesInfo={gamesInfo}/>
        </div>
    );
}

export default GamePage;