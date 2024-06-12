'use client';

import '../../styles/pages.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DisplayShuffle from './DisplayShuffle';
import MusicComp from './MusicComp';
import { CourseCover, ExpCover } from '../decors';

const AboutGrid: React.FC<{info: any}> = ({info}) => {    
    // const [info, setInfo]
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
        <section className="grid md:grid-rows-2 md:grid-cols-3 grid-cols-1 grid-rows-6 grid-flow-col aspect-16-9 gap-[40px] px-6 pt-6 transition-colors duration-500">
            {/* <div className="bg-th-tertiary justify-center items-center flex flex-col">
                <p className='mx-5 text-lg/8 font-sans font-semibold whitespace-pre-wrap text-pretty'>
                My name is Sabrina Liang. I am <br/>a recent graduate from <a href="https://www.umass.edu" target='_blank' className="font-bold underline">UMASS Amherst</a>. 
                </p>
                <p className='mx-4 mt-2 text-lg/8 font-sans font-semibold whitespace-pre-wrap text-pretty'>
                Where I have just completed my Master's degree in <a className='font-bold'>Computer Science</a>. 
                </p>
                <p className='mx-5 my-2 text-lg/8 font-sans font-semibold whitespace-pre-wrap text-pretty'>
                My interest lies in the intersec-tion of <span className='underline text-xl font-bold'>art and technology</span>, with a passion to make my projects intuitive and visually pleasing :)
                </p>
            </div> */}
            <div className="bg-th-tertiary justify-center items-center flex flex-col">
                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                My name is <span className='text-3xl font-bold'>Sabrina</span>. I am a recent graduate from <a href="https://www.umass.edu" target='_blank' className="font-bold underline">UMASS Amherst</a> with a Master's degree in <a href="https://www.cics.umass.edu/" target='_blank' className='font-bold underline'>Computer Science</a>. 
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
                <div className='absolute w-full h-full flex flex-col gap-3 overflow-y-auto p-4 bg-th-secondary text-th-background transition-colors duration-500'>
                    <span> Teaching Associate & Assistant </span>
                    <span> Software Development Intern </span>
                    <span> Research Assistant </span>
                    <span> Research Assistant </span>
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
                <MusicComp/>
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
                                <span key={index} className='mx-5 my-[2px]'> 
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