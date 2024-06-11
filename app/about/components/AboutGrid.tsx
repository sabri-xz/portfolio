'use client';

import '../../styles/pages.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DisplayShuffle from './DisplayShuffle';

const AboutGrid: React.FC<{info: any}> = ({info}) => {    
    // const [info, setInfo]
    const education = info.education;
    const courses = info.courses;
    const experiences = info.experiences;
    const artworks = info['art-displays'];
    const plants = info['plant-displays'];

    return (
        <section className="grid md:grid-rows-3 md:grid-cols-3 grid-cols-1 grid-rows-9 grid-flow-col aspect-16-9 gap-[40px] px-6 pt-6">
            <div className="bg-th-tertiary">
                I am a recent graduate from UMASS AMHERST
            </div>
            <div className="bg-th-tertiary relative">
                <div className='absolute w-full h-full z-10 bg-slate-400 hover:opacity-0 transition-opacity duration-200'>
                    Experiences
                </div>
                <div className='absolute w-full h-full flex flex-col gap-3'>
                    <span> Teaching Associate & Assistant </span>
                    <span> Software Development Intern </span>
                    <span> Research Assistant </span>
                    <span> Research Assistant </span>
                </div>
            </div>
            <div className="bg-th-tertiary relative">
                <div className='polaroid-frame absolute w-full h-full'/>
                7
            </div>
            <div className="bg-th-tertiary relative">
                <div className='absolute w-full h-full hover:opacity-0 z-10 transition-opacity duration-200'>
                    <div className='polaroid-frame absolute w-full h-full'/>
                    <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/main/art-portfolio/imgs/about-me/gradpic.png" 
                        alt="Grad Photo Drawing" 
                        width={600} height={400}
                        className='w-full h-full object-cover object-center' />
                </div>
                <div className='absolute w-full h-full'>
                    <div className='polaroid-frame absolute w-full h-full'/>
                    <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/main/art-portfolio/imgs/about-me/gradpic1.png"
                        alt='Grad Photo'
                        width={600} height={400}
                        className='w-full h-full object-cover object-center' />
                </div>
            </div>
            <div className="bg-th-tertiary">
                5
            </div>
            <div className="bg-th-tertiary">
                i love PLANTS
            </div>
            <div className="bg-th-tertiary relative">
                <div className='absolute w-full h-full z-10 bg-slate-400 hover:opacity-0 transition-opacity duration-200'>
                Course work
                </div>
                <div className='absolute w-full h-full flex flex-col gap-3'>
                    {
                        courses.map((course: any, index: number) => {
                            return (
                                <span key={index}> {course} </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-th-tertiary">
                music
            </div>
            <div className="bg-th-tertiary relative">
                <DisplayShuffle arts={artworks}/>
            </div>
        </section>
    );
}

export default AboutGrid;