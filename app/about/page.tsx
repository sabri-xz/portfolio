import path from "path";
import fs from "fs";
import '../styles/pages.css'
import { getNowPlaying } from "./spotify/spotify";
import AboutGrid from "./components/AboutGrid";

interface SongInfo {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'aboutme.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

export default async function Home() {
    const info: any = await getInfo();
    const song: SongInfo | null = await getNowPlaying();

    return (
      <div className="page-container flex md:items-center flex-col">
        <section className="md:w-[900px] flex items-end">
          <h1 className="text-9xl text-left w-auto">ABouT</h1>
          <h1 className="text-5xl mb-3 ml-5">me</h1>
        </section>
        <AboutGrid info={info} song={song}/>
      </div>
    );
}