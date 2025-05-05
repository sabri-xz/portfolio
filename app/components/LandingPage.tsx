'use client'

import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "../styles/animation.css"
import { GithubIcon, LinkedInIcon, GmailIcon } from './icons';
import { NameCard } from './components/NameCard';
import { Averia_Serif_Libre } from 'next/font/google'
import Link from 'next/link';

const averia_norm = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });
const averia_thic = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

export const LandingPage: React.FC<{ info: any }> = ({ info }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    const intro: string = info.intro;
    const second_intro: string = info.second_intro;
    const socials: any[] = info.socials
    const name: string = info.name;

    const textSectionRef = useRef<HTMLDivElement>(null);
    const placeholderSrc = "https://media.githubusercontent.com/media/sabri-xz/portfolio/main/imgs/about-me/drawing1.png";

    return (
        <>
            <div className={`intro-section`} > 
                <section className='intro-text'>
                    <a className={`${averia_thic.className} text-6xl`}>
                        Hello,
                    </a>
                    <div className='flex flex-row items-end'>
                        <a className='text-3xl ml-12 -mr-2'>
                            my name is 
                        </a>
                        <NameCard nameFront="Sabrina" nameBack="Xinzhi"/>
                    </div>
                    
                    <section ref={textSectionRef} className='intro-paragraph flex-col'>
                        <div className='mt-2 text-xl'>
                            welcome to my portfolio
                        </div>
                        <div className={`${averia_norm.className} text-2xl`}>
                            {intro}
                        </div>
                        <div className='flex pt-6 gap-16'>
                            <Link href={socials[0].url} target='_blank'> 
                                <GithubIcon className='text-th-foreground hover:text-th-secondary' width={25} height={25}/>
                            </Link>
                            <Link href={socials[1].url} target='_blank'> 
                                <LinkedInIcon className='text-th-foreground hover:text-th-secondary' width={25} height={25}/>
                            </Link>
                            <Link href={socials[2].url} target='_blank'> 
                                <GmailIcon className='text-th-foreground hover:text-th-secondary' width={25} height={25}/>
                            </Link>
                        </div>
                    </section>
                </section>
                <div className='four-leaves-clover'/>
                {/* <div className='portrait-section'>
                <Image 
                    alt="Placeholder"
                    src={placeholderSrc} 
                    width={600} height={400} 
                    sizes="(max-width: 300px) 100vw, 300px" 
                    className='w-full h-full'/>
                </div> */}
            </div>
            <div className='more-section'>
                
            </div>
        </>
    );
};
