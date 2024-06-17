'use client'

import { useState } from 'react';
import '../../styles/pages.css'
import Image from 'next/image';

interface Pic {
    src: string,
    alt: string,
    description: string
}

const PicturePile: React.FC<{pics: Pic[]}> = ( {pics} ) => {

    return (
        <>
            <span>pictures</span>
            {
                pics.map((pic: Pic) => (
                    <div className='absolute w-[300px] h-[420px] hover:opacity-0 z-10 transition-opacity duration-200'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={pic.src} 
                            alt={pic.alt}
                            width={600} height={400}
                            className='w-full h-full object-cover object-center' />
                    </div>
                ))
            }
        </>
    )
}

export default PicturePile;