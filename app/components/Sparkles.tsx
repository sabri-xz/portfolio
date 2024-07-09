'use client'

import { useEffect, useState } from 'react';
import "../styles/animation.css"

const Sparkles: React.FC<{logoX: number, logoWidth: number, logoY: number}> = ({logoX, logoWidth, logoY}) => {
    const [showSparkles, setShowSparkles] = useState([false, false, false]);

    console.log(logoY);

    useEffect(() => {
        const animationTimeout1 = setTimeout(() => {
            setShowSparkles([true, false, false]);
        }, 250); 
        const animationTimeout2 = setTimeout(() => {
            setShowSparkles([true, true, false]);
        }, 750); 
        const animationTimeout3 = setTimeout(() => {
            setShowSparkles([true, true, true]);
        }, 1250); 

        return () => {
            clearTimeout(animationTimeout1);
            clearTimeout(animationTimeout2);
            clearTimeout(animationTimeout3);
        };
    }, []);

    return (
        <div className="">
                <svg width="20" height="20" 
                     className={`text-th-foreground sparkle1 absolute ${showSparkles[0] ? '' : 'hidden'}`}
                     style={{top:`${logoY}`, left:`${logoX + 0.39*logoWidth}px`}}>
                    <circle cx="10" cy="10" r="10" fill="currentColor" />
                </svg>

                <svg width="20" height="20" 
                     className={`text-th-foreground sparkle1 absolute ${showSparkles[1] ? '' : 'hidden'}`}
                     style={{top:'25%', left:`${logoX + 0.89*logoWidth}px`, transform: 'translate(-50%, -50%)'}}>
                    <circle cx="10" cy="10" r="10" fill="currentColor" />
                </svg>

                <svg width="20" height="20" 
                     className={`text-th-foreground sparkle1 absolute ${showSparkles[2] ? '' : 'hidden'}`}
                     style={{top:'60%', left:`${logoX + 0.39*logoWidth}px`, transform: 'translate(-50%, -50%)'}}>
                    <circle cx="10" cy="10" r="10" fill="currentColor" />
                </svg>
        </div>
    )
}

export default Sparkles;