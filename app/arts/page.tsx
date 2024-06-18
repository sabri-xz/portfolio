import path from 'path';
import fs from "fs";
import GamePage from './components/GamePage';
import ArtsGrid from './components/ArtsGrid';
import SketchPage from './components/SketchPage';
import '../styles/pages.css'

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
        <div className='page-container'>
            <h1 className='justify-self-center text-xl'> Welcome to my art gallery </h1>
            <ArtsGrid />
            <GamePage gamesInfo={games}/>
        </div>
    );
  }