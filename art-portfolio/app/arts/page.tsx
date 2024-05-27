import path from 'path';
import fs from "fs";
import GamePage from './components/GamePage';

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}
  
const getGames = async ( jsonFile: string, section: string ): Promise<Game[]> => {
    const filePath = path.join(process.cwd(), 'app/data', jsonFile);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const games: Game[] = await JSON.parse(jsonData)[section];
    return games;
};

export default async function Home() { 
    const games = await getGames('gameData.json', 'games');
  
    return (
        <div>
            <h1 className='justify-self-center text-xl'> Welcome to my personal art gallery </h1>
            <GamePage gamesInfo={games}/>
        </div>
    );
  }