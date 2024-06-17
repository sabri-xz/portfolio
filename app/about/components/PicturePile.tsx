'use client'

import { useState } from 'react';
import '../../styles/pages.css'
import Image from 'next/image';
import Picture from './Picture';

interface Pic {
    src: string,
    alt: string,
    description: string
}



const PicturePile: React.FC<{pics: Pic[]}> = ( {pics} ) => {
    let i = 0
    return (
        <div className='mt-8'>
            <section className='flex relative md:w-[900px] sm:w-[370px]'>
                {
                    pics.map((pic: Pic) => {
                        return (
                            <Picture pic={pic} id={i++}/>
                        )
                    }) 
                }
            </section>

        </div>
    )
}

export default PicturePile;