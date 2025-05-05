import path from "path";
import fs from "fs";
import '../styles/pages.css'
import AboutGrid from "./components/AboutGrid";
import Me from "./components/MeText";
import About from "./components/AboutText";
import TimeLine from "./components/TimeLine";
import PicturePile from "./components/PicturePile";
import { ScrollIcon } from '@/app/components/icons';
import { getPlaiceholder } from 'plaiceholder';
import { Pic, GridItem } from "../types";
import { Averia_Serif_Libre } from 'next/font/google'

const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'aboutme.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

const getBuffer = async (url: string) => {
  const buffer = await fetch(url).then(async (res) => 
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};

export default async function Home() {
    const info: any = await getInfo();
    const pics: Pic[] = info["glimpses-of-my-life"];
    const gridItems: GridItem[] = info["grid-items"];

    // gridItems.map(async (item: GridItem) => {
    //   item.blurredPhoto = await getBuffer(item.photo);
    //   item.blurredDrawing = await getBuffer(item.drawing);
    // });

    return (
      <div className="page-container flex md:items-center flex-col relative">
        <section className="md:h-[950px] sm:h-[1900px] md:w-[1028px] sm:w-[370px] flex flex-col items-center relative mt-10">
          <section className="flex items-end md:w-[900px] sm:w-[370px] sm:flex-col mr-4 my-16 mb-18">
            <About className="md:mr-8 md:ml-2 sm:m-0"/> <Me className="md:h-[108px] sm:h-[72px] my-2 mx-3"/>
          </section>
          <AboutGrid gridItems={gridItems} />
          <div className="flex justify-center w-full absolute -bottom-[425px] left-0 right-0 shake pointer-events-none">
            <ScrollIcon className="text-th-foreground scale-4 z-40"/>
          </div>
          {/* <PageSparkles /> */}
        </section>
        
        <section className="h-auto w-[100vw] bg-th-midground1 flex flex-col items-center py-44">
          <section className="flex flex-col md:w-[1028px] sm:w-[370px] ml-24 leading-loose text-lg">
            <span className={`${averia.className} text-4xl`}>hello, </span>
            <span>I draw, I program, and I enjoy both</span>
            <span>CS and Math gave me a strong technical background</span>
            <span>and Art History taught me the art of perception</span>
            <span>looking forward to use my skills in real life projects</span>
            <span>thanks for visiting</span>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] mr-16 pl-[465px]">
            <span className={`${averia.className} w-full text-center text-4xl`}>my journey so far</span>
            <TimeLine info={info}/>
          </section>

          <section className="flex flex-col md:w-[1028px] sm:w-[370px] ml-24 -mt-8">
            <span className={`${averia.className} text-4xl`}> skills </span>
            <span className="w-[375px] mt-3 leading-loose">
              <span className="font-bold"> Technical: </span> R, JavaScript, Python, PostgreSQL, HTML, CSS, Git, Unity <br/>
              <span className="font-bold"> Design: </span> Latex, Microsoft Office, Adobe Illustrator, Figma, Procreate
            </span>
          </section>
          
          {/* <div className="flex justify-center w-full absolute left-0 right-0 shake pointer-events-none">
            <ScrollIcon className="text-th-foreground scale-4 z-40"/>
          </div> */}
        </section>

        <section className="w-[100vw] flex flex-col items-center">
          <section className="md:h-[950px] sm:h-[1900px] md:w-[1028px] sm:w-[370px] mt-20">
            <span className="text-xl font-medium"> 
              If you would like to take a glimpse into my life :)
            </span>
            <PicturePile pics={pics}/>
          </section>
        </section>
      </div>
    );
}