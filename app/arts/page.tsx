import path from 'path';
import fs from "fs";
import VisualArtPage from './components/VisualArtPage';
import GamePage from './components/GamePage';
import CraftsPage from './components/CraftsPage';
import ArtsGrid from './components/ArtsGrid';
import '../styles/pages.css'

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}
  
const getInfo = async ( jsonFile: string, section: string ): Promise<any[]> => {
    const filePath = path.join(process.cwd(), 'app/data', jsonFile);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const info: any[] = await JSON.parse(jsonData)[section];
    return info;
};

export default async function Home() { 
    const games = await getInfo('gameData.json', 'games');
    const imgs = await getInfo('arts.json', 'placeholders');
  
    return (
        <div className='page-container'>
            <h1 className='justify-self-center text-xl'> Welcome to my art gallery </h1>
            <VisualArtPage imgs={imgs}/>
            <GamePage gamesInfo={games}/>
            <CraftsPage />
        </div>
    );
  }