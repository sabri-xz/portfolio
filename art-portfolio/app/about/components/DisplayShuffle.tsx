'use client'

import { useState } from "react";
import Image from "next/image";

type Art = {
    src: string;
    alt: string;
}

const DisplayShuffle: React.FC<{arts: Art[]}> = ({arts}) => {
    const [art, setArt] = useState(arts[0]);
    const [currentArt, setCurrentArt] = useState(0);

    const randomSrc = () => {
        let a = Math.floor(Math.random() * arts.length);
        if (a == currentArt) { // shuffle till different from current
            a = Math.floor(Math.random() * arts.length);
        }
        setCurrentArt(a);
        setArt(arts[a]);
    }
    
    return (
        <div className="absolute w-full h-full bg-slate-400 cursor-pointer"
            onClick={randomSrc}>
            <Image src={art.src} layout="fill" objectFit="cover" alt={art.alt} />
        </div>
    )
}

export default DisplayShuffle;