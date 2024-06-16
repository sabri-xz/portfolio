'use client';

import '../../styles/pages.css'
import Image from 'next/image';
import { useState } from 'react';


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
    const song_mock = info['placeholder-music'];
    const [divVisibility, setDivVisibility] = useState<{[key: string]: boolean}>({
        "hello": true,
        "edu": true,
        "art":true
    });

    const toggleCover = (divId: string) => {
        setDivVisibility ({
            ...divVisibility,
            [divId]: !divVisibility[divId]
        });
    };

    if (song == null) {
        song = song_mock
    }

    return (
        <section className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3
                            grid-flow-col grid-things gap-[40px] pt-2 pb-8 transition-colors duration-500">

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("edu")}>
                <div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.edu? "visible" : "hidden"}`}>
                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> education </span>
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
                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                I am a recent graduate from <a href="https://www.umass.edu" target='_blank' className="font-bold underline">UMASS Amherst</a> with a Master's degree in <a href="https://www.cics.umass.edu/" target='_blank' className='font-bold underline'>Computer Science</a>. 
                </p>
            </div>

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("hello")}>
                <div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.hello? "visible" : "hidden"}`}>
                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> hello world </span>
                    <div className='absolute w-full h-full hover:opacity-0 z-10 transition-opacity duration-200'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/about-me-reformat/imgs/about-me/flowers.png" 
                            alt="Drawing" 
                            width={600} height={400}
                            className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute w-full h-full'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/about-me-reformat/imgs/about-me/flowers1.png"
                            alt='Photo'
                            width={600} height={400}
                            className='w-full h-full object-cover object-center' />
                    </div>
                </div>
                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                My name is <span className='text-3xl font-bold'>Sabrina</span> and my interest lies in the intersection of <span className='text-3xl font-bold'>art and technology</span>, with a passion to make my projects intuitive and visually pleasing :)
                </p>
            </div>

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("exp")}>
                <div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.exp? "visible" : "hidden"}`}>
                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> experiences </span>
                    <div className='absolute w-full h-full hover:opacity-0 z-10 transition-opacity duration-200'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/about-me-reformat/imgs/about-me/flowers.png" 
                            alt="Drawing" 
                            width={600} height={400}
                            className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute w-full h-full'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/about-me-reformat/imgs/about-me/flowers1.png"
                            alt='Photo'
                            width={600} height={400}
                            className='w-full h-full object-cover object-center' />
                    </div>
                </div>
                <div className='absolute w-full h-full overflow-y-auto bg-th-tertiary text-[#3D4927] transition-colors duration-500'>
                    <section className='font-medium text-lg gap-3 p-4 flex flex-col'>
                        <span> I've worked on various research projects exploring <span className='underline'>human biases</span> and <span className='underline'>visualization effectiveness</span>, developing surveys and leading a team focusing on older adults' engagement with visual content. </span>
                        <span> In industry, I interned with the <span className='underline'>Amazon Alexa Team</span>, collaborating on project design and delivering high-quality code within deadlines. </span>
                        <span> As a Teaching Assistant, I designed and instructed a first-year seminar for Computer Science freshmen, alongside providing academic support and leading discussions for various core classes. </span>
                    </section>
                </div>
            </div>

            
        </section>
    );
}

export default AboutGrid;