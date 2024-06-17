import path from "path";
import fs from "fs";
import '../styles/pages.css'
import { getNowPlaying } from "./api/spotify";
import AboutGrid from "./components/AboutGrid";
import Me from "./components/MeText";
import About from "./components/AboutText";
import PageSparkles from "./components/PageSparkles";
import TimeLine from "./components/TimeLine";
import PicturePile from "./components/PicturePile";
import { ScrollIcon } from '@/app/components/icons';

interface SongInfo {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

interface Pic {
  src: string,
  alt: string,
  description: string
}

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'aboutme.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

export default async function Home() {
    const info: any = await getInfo();
    // const song: SongInfo | null = await getNowPlaying();
    const pics: Pic[] = info["art-displays"];
    // console.log(pics)

    return (
      <div className="page-container flex md:items-center flex-col relative">
        <section className="md:h-[950px] sm:h-[1900px] md:w-[1028px] sm:w-[370px] flex flex-col items-center relative">
          <section className="flex items-end md:w-[900px] sm:w-[370px] mr-4 my-16 mb-18">
            <About className="mr-6 ml-3"/> <Me className="md:h-[108px] sm:h-[72px] -my-4 mr-3"/>
          </section>
          <AboutGrid info={info}/>
          <div className="flex justify-center w-full absolute -bottom-[425px] left-0 right-0 shake pointer-events-none">
            <ScrollIcon className="text-th-foreground scale-4 z-40"/>
          </div>
          <PageSparkles />
        </section>
        
        <section className="h-auto w-[100vw] bg-th-midground1 flex flex-col items-center py-44">
          
          <section className="flex flex-col md:w-[1028px] sm:w-[370px] ml-24 leading-loose">
            <span className="text-3xl">hello, </span>
            <span>I draw, I program, and I enjoy both</span>
            <span>CS and Math gave me a strong technical background</span>
            <span>and Art History taught me the art of perception</span>
            <span>looking forward to use my skills in real life projects</span>
            <span>thanks for visiting</span>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] mr-24 pl-[496px]">
            <span className="w-full text-center text-3xl">my Journey so far</span>
            <TimeLine info={info}/>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] ml-24 -mt-8">
            <span className="text-3xl"> skills </span>
            <span className="w-[350px] mt-3 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ligula lectus, vel vestibulum est molestie at. In metus leo, gravida a neque fermentum, cursus suscipit nulla. Sed finibus a nulla quis fermentum. Nulla pulvinar dui nec nisl finibus, at interdum massa egestas. Quisque id convallis mi.
            </span>
          </section>
          
          {/* <div className="flex justify-center w-full absolute left-0 right-0 shake pointer-events-none">
            <ScrollIcon className="text-th-foreground scale-4 z-40"/>
          </div> */}
        </section>

        <section className="h-[930px] w-[100vw] flex flex-col items-center">
          <section className="md:h-[950px] sm:h-[1900px] md:w-[1028px] sm:w-[370px] mt-16">
            <span>In my free time, i enjoy knitting and tending to my plants</span>

            {/* want to add some random pictures here */}
            <PicturePile pics={pics}/>
          </section>
        </section>
      </div>
    );
}