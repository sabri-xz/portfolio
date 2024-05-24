'use client'
import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

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
        }, 50);
        return () => clearInterval(typingInterval);
    }, [inView, text, setFinished]);

    return <p className="text-left text-xl whitespace-pre-line"
        style={{fontSize: "1.5em"}}>
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

            <section ref={textSectionRef} className='h-screen flex snap-start pt-16'>
                <div className='w-full static'>
                    <TypingEffect text={intro} inView={inView} setFinished={setFinishedTyping}/>
                    {finishedTyping &&
                    <div>
                        <Link href={socials[0].url}> github </Link>
                        <Link href={socials[1].url}> linkedIn </Link>
                        <Link href={socials[2].url}> email </Link>    
                    </div>}
                </div>
                
                
            </section>
        </div>
    )
}

export default StartPage;