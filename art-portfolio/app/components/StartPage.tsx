'use client'

import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import "../styles/animation.css"
import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, LinkedInIcon, GmailIcon } from './icons';

const TypingEffect: React.FC<{ text: string, inView: boolean, setFinished: Dispatch<SetStateAction<boolean>>}> = ({ text, inView, setFinished }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!inView) {
            return;
        }

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length-1) {
                setDisplayedText((prev:string): string => prev + text[i]);
                i++;
            } else {
                clearInterval(typingInterval);
                setFinished(true);
            }
        }, 15);
        return () => clearInterval(typingInterval);
    }, [inView, text, setFinished]);

    return <p className="text-left text-xl whitespace-pre-line font-medium"
        style={{fontSize: "1.5em", lineHeight: "2em"}}>
        {displayedText}
    </p>;
};

const StartPage: React.FC<{ info: any }> = ({ info }) => {
    const textSectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [finishedTyping, setFinishedTyping] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        { threshold: 0.5 } // percentage of item in view to trigger the callback
      );
  
      if (textSectionRef.current) {
        observer.observe(textSectionRef.current);
      }
  
      return () => {
        if (textSectionRef.current) {
          observer.unobserve(textSectionRef.current);
        }
      };
    }, []);

    let intro: string = info.intro;
    let socials: any[] = info.socials
    let name: string = info.name;

    return (
        <div className='snap-y snap-mandatory h-screen overflow-y-auto px-16 relative'>
            <section className='h-screen flex items-center justify-center snap-start'>
                <h1 className="text-6xl font-bold text-center">Portfolio</h1>
            </section>

            <section ref={textSectionRef} className='h-screen flex snap-start'>
                <div className='w-full relative pt-48'>
                    <TypingEffect text={intro} inView={inView} setFinished={setFinishedTyping}/>
                    {finishedTyping &&
                    <div className='flex pt-4 px-4' style={{ animation: 'expandItems 0.3s forwards' }}>
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
                    }
                    {finishedTyping &&
                    <div className='flex pt-24 px-4' style={{ animation: 'expandItems 0.3s forwards' }}>
                        <Link href="/about" replace> 
                            <div className='text-th-foreground hover:text-th-secondary font-normal'> About </div>
                        </Link>
                        <Link href="/files/resume.pdf" target="_blank"> 
                            <div className='text-th-foreground hover:text-th-secondary font-normal'> Resume </div>
                        </Link>
                        <Link href="/projects" replace> 
                            <div className='text-th-foreground hover:text-th-secondary font-normal'> Projects </div>
                        </Link>
                        <Link href="/arts" replace> 
                            <div className='text-th-foreground hover:text-th-secondary font-normal'> Arts </div>
                        </Link>
                    </div>
                    } 
                </div>
                
                <ThemeSwitcher/>
            </section>
        </div>
    )
}

export default StartPage;