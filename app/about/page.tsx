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
        <section className="md:h-[950px] sm:h-[1900px] md:w-[1028px] sm:w-[370px] flex flex-col items-center relative">
          <section className="flex items-end md:w-[900px] sm:w-[370px] mr-4 my-16 mb-18">
            <About className="mr-6 ml-3"/> <Me className="md:h-[108px] sm:h-[72px] -my-4 mr-3"/>
          </section>
          <AboutGrid info={info} song={song}/>
          <div className="flex justify-center w-full absolute -bottom-3 left-0 right-0">
            scroll down
          </div>
        </section>
        
        <section className="h-auto w-[100vw] bg-th-midground flex flex-col items-center">
          <section className="flex flex-col md:w-[1028px] sm:w-[370px] mt-16 ml-24">
            <span className="text-3xl">hello, </span>
            <span>I draw, I program, and I enjoy both</span>
            <span>CS and Math gave me a strong technical background</span>
            <span>and Art History taught me the art of perception</span>
            <span>looking forward to use my skills in real life projects</span>
            <span>thanks for visiting</span>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] mr-24">
            <span className="w-full text-right text-3xl pr-24">my Journey so far</span>
            <span className="text-right whitespace-pre-wrap pr-10">experiences                                                  education</span>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] ml-24">
            <span className="text-3xl"> skills </span>
          </section>
          
        </section>

        <section className="md:h-[750px] sm:h-[1667px] w-[100vw] bg-th-background flex flex-col">
          <span>skills</span>
        </section>
        
        <PageSparkles />
      </div>
    );
}