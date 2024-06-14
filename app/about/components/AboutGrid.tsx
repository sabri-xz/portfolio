'use client';

import '../../styles/pages.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DisplayShuffle from './DisplayShuffle';
import MusicComp from './MusicComp';

import { CourseCover, ExpCover } from '../decors';

interface SongInfo {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
}

const AboutGrid: React.FC<{info: any, song: SongInfo| null}> = ({info, song}) => { 
    const education = info.education;
    const courses = info.courses;
    const experiences = info.experiences;
    const artworks = info['art-displays'];
    const plants = info['plant-displays'];
    const [divVisibility, setDivVisibility] = useState<{[key: string]: boolean}>({
        "crs": true,
        "exp": true
    });

    const toggleCover = (divId: string) => {
        setDivVisibility ({
            ...divVisibility,
            [divId]: !divVisibility[divId]
        });
    };

    return (
        <section className="grid md:grid-rows-2 md:grid-cols-3 grid-cols-1 grid-rows-6 grid-flow-col aspect-16-9 gap-[40px] px-6 pt-6 transition-colors duration-500 pb-8">
            <div className="bg-th-tertiary justify-center items-center flex flex-col">
                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                My name is <span className='text-3xl font-bold'>Sabrina</span>. <br/>I am a recent graduate from <a href="https://www.umass.edu" target='_blank' className="font-bold underline">UMASS Amherst</a> with a Master's degree in <a href="https://www.cics.umass.edu/" target='_blank' className='font-bold underline'>Computer Science</a>. 
                </p>
                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                My interest lies in the intersection of <span className='text-3xl font-bold'>art and technology</span>, with a passion to make my projects intuitive and visually pleasing :)
                </p>
            </div>

            <div className="relative hover:cursor-pointer"
                onClick={() => toggleCover("exp")}>
                <div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.exp? "visible" : "hidden"}`}>
                    <ExpCover className='text-th-foreground m-2 mt-3 hover:text-th-secondary transition-colors duration-500'/>
                </div>
                <div className='absolute w-full h-full overflow-y-auto bg-th-secondary text-th-background transition-colors duration-500'>
                    <section className='font-medium text-lg gap-3 p-4 flex flex-col'>
                        <span> I've worked on diverse research projects exploring human biases and visualization effectiveness, developing surveys and leading a team focusing on older adults' engagement with visual content. </span>
                        <span> In industry, I interned with the Amazon Alexa Team, collaborating on project design and delivering high-quality code within deadlines. </span>
                        <span> As a Teaching Assistant, I designed and instructed a first-year seminar for Computer Science freshmen, alongside providing academic support and leading discussions for various core classes. </span>
                    </section>
                </div>
            </div>

            <div className="bg-th-tertiary relative">
                <div className='absolute w-full h-full hover:opacity-0 z-10 transition-opacity duration-200'>
                    <div className='polaroid-frame absolute w-full h-full'/>
                    <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/main/imgs/about-me/gradpic.png" 
                        alt="Grad Photo Drawing" 
                        width={600} height={400}
                        className='w-full h-full object-cover object-center' />
                </div>
                <div className='absolute w-full h-full'>
                    <div className='polaroid-frame absolute w-full h-full'/>
                    <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/main/imgs/about-me/gradpic1.png"
                        alt='Grad Photo'
                        width={600} height={400}
                        className='w-full h-full object-cover object-center' />
                </div>
            </div>

            <div className="bg-th-tertiary">
                <MusicComp song={song} />
            </div>

            <div className={`relative hover:cursor-pointer`}
                onClick={() => toggleCover("crs")}>
                    <div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.crs? "visible" : "hidden"}`}>
                    <CourseCover className='text-th-foreground m-2.5 hover:text-th-secondary transition-colors duration-500'/>
                </div>
                
                <div className='absolute w-full h-full flex flex-col gap-3 overflow-y-auto py-4 bg-th-secondary transition-colors duration-500'>
                    {
                        courses.map((course: any, index: number) => {
                            return (
                                <span key={index} className='mx-5 my-[2px] font-medium text-lg text-th-background'> 
                                    {course} 
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            <div className="bg-th-tertiary relative polaroid-frame">
                <DisplayShuffle arts={artworks}/>
            </div>
        </section>
    );
}

export default AboutGrid;