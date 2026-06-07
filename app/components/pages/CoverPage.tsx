'use client'

import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "../../styles/animation.css"
import { NameCard } from '../components/NameCard';
import { Averia_Serif_Libre } from 'next/font/google'
import './styles/coverPage.css';

const averia_norm = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });
const averia_thic = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

export const CoverPage: React.FC<{ info: any }> = ({ info }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const textSectionRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`intro-section blurring`} > 
            <section className='intro-text'>
                <a className={`${averia_thic.className} text-4xl`}>
                    Hello, my name is sabrina.
                </a>
                <section ref={textSectionRef} className='intro-paragraph flex-col'>
                    <div className='mt-2 text-xl'>
                        welcome to my portfolio.
                    </div>
                    <div className={`${averia_norm.className} text-2xl`}>
                        I am a frontend developer, artist, and a plant parent :)
                    </div>
                </section>
            </section>
            <div className='four-leaves-clover'/>
        </div>
    );
};
