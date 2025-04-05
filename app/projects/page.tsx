import path from 'path';
import fs from "fs";
import Directory from '../projects/components/Directory';
import CourseProjectDisplay from './components/CourseProjectDisplay';
import GameGallery from './components/GameGallery';
import { ScrollIcon } from '@/app/components/icons';
import '../styles/pages.css'
import '../styles/animation.css'
import { Averia_Serif_Libre } from '@next/font/google'

const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });

const getInfo = async ( jsonFile: string, section: string ): Promise<any[]> => {
    const filePath = path.join(process.cwd(), 'app/data', jsonFile);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const info: any[] = await JSON.parse(jsonData)[section];
    return info;
};

export default async function Home() { 
    const games = await getInfo('projects.json', 'games');
    const courseProjects = await getInfo('projects.json', 'course-projects');
    const others = await getInfo('projects.json', 'others');
  
    return (
        <div className='page-container flex-col items-center'>
            <section className='h-[750px] flex flex-col items-center justify-center relative bg-th-midground1 w-[100vw]'
                style={{top: "-40px"}}>
                <h1 className={`${averia.className} text-8xl`}> Project Gallery </h1>
                <h3 className='mt-4'> Here are some projects that I have made/helped make. </h3>
                <div className="flex justify-center w-full absolute -bottom-[535px] left-0 right-0 shake pointer-events-none">
                    <ScrollIcon className="text-th-foreground scale-3.5 z-40"/>
                </div>
            </section>

            <section className='h-auto flex flex-col items-center justify-center relative w-full py-24 px-12'
                     id='Games'>
                        <div className='bg-th-art2 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <div className="m-5 w-full">
                            <h1 className={`${averia.className} text-5xl`}> Games </h1>
                            <p className={`${averia.className} mt-1`}> Here are some games that I have made art for. </p>
                        </div>
                        <GameGallery gamesInfo={games}/>
            </section>

            <section className='h-auto flex flex-col items-center justify-center relative w-full py-24 px-12'
                     id='Course-projects'>
                        <div className='bg-th-art1 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <div className='m-5 w-full'>
                            <h1 className={`${averia.className} text-5xl`}> Course Projects </h1>
                            <p className={`${averia.className} mt-1`}> Projects for various courses from school. </p>
                        </div>
                        <CourseProjectDisplay projects={courseProjects} />
            </section>

            {/* <section className='h-auto flex items-center justify-center relative w-full py-24'
                     id='Crafts'>
                        <div className='bg-th-art3 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <CraftsPage imgs={imgs}/>
            </section> */}
        </div>
    );
  }