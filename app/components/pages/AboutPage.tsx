'use client'

import { useEffect, useRef, useState } from 'react';
import "../../styles/animation.css"
import { Averia_Serif_Libre } from 'next/font/google'
import './styles/aboutPage.css';
import { TimeLine } from '../components/TimeLine';
import { Chevron } from '../icons';

const averia_norm = Averia_Serif_Libre({ subsets: ['latin'], weight: ['400'] });
const averia_thic = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

export const AboutPage: React.FC<{ info: any }> = ({ info }) => {
    const statement = `I am Sabrina, a frontend developer at Splunk, a Cisco Company with a master in computer science from UMass Amherst (May 2024). I’m curious, open-minded, and love drawing inspiration from different fields—from art to science—believing that inspiration can come from anywhere. I am driven by being able to bringing user-friendly, creative, and visually delightful designs to life through code.`;

    return (
        <div className={`about-section`} >
            <Chevron
                width={25}
                height={25}
                className={`chevron absolute -top-32`}
            />
            <div className='about-paragraph'>
                {statement}
            </div>
            <div className='about-timeline'>
                <TimeLine 
                    width={750}
                    height={150}
                    className='timeline'
                />
            </div>
        </div>
    );
};
