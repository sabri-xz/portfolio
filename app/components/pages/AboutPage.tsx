'use client'

import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "../../styles/animation.css"
import { NameCard } from '../components/NameCard';
import { Averia_Serif_Libre } from 'next/font/google'

const averia_norm = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });
const averia_thic = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

export const AboutPage: React.FC<{ info: any }> = ({ info }) => {
    const statement = ``;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const textSectionRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`about-section`} > 
            about
        </div>
    );
};
