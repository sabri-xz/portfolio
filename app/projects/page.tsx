import path from 'path';
import fs from "fs";
import Directory from '../projects/components/Directory';
import CourseProjectPage from './components/CourseProjectPage';
import GamePage from '../projects/components/GamePage';
import { ScrollIcon } from '@/app/components/icons';
import '../styles/pages.css'
import '../styles/animation.css'
import React from 'react';

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
                <h1 className='text-5xl font-bold'> Project Gallery </h1>
                <h3 className='mt-4'> Here are some projects that I have made/helped make. </h3>
                <div className="flex justify-center w-full absolute -bottom-[550px] left-0 right-0 shake pointer-events-none">
                    <ScrollIcon className="text-th-foreground scale-3.5 z-40"/>
                </div>
            </section>
            
            <section className='mb-16'>
                <Directory/>
            </section>

            <section className='h-auto flex items-center justify-center relative w-full py-24'
                     id='Course-projects'>
                        <div className='bg-th-art1 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <CourseProjectPage projects={courseProjects}/>
            </section>
            
            <section className='h-auto flex items-center justify-center relative w-full py-24'
                     id='Games'>
                        <div className='bg-th-art2 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <GamePage gamesInfo={games}/>
            </section>

            {/* <section className='h-auto flex items-center justify-center relative w-full py-24'
                     id='Crafts'>
                        <div className='bg-th-art3 w-[100vw] absolute h-full -z-10 transition-colors duration-500'></div>
                        <CraftsPage imgs={imgs}/>
            </section> */}
        </div>
    );
  }