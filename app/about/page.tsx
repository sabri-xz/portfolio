import path from "path";
import fs from "fs";
import '../styles/pages.css'
import { getNowPlaying } from "./api/spotify";
import AboutGrid from "./components/AboutGrid";
import Me from "./components/MeText";
import About from "./components/AboutText";
import PageSparkles from "./components/PageSparkles";

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
        <section className="md:w-[900px] sm:w-[370px] flex items-end">
          <About className="mr-6 ml-3"/> <Me className="md:h-[108px] sm:h-[72px] -my-4 mr-3"/>
        </section>
        <AboutGrid info={info} song={song}/>
        <PageSparkles />
      </div>
    );
}