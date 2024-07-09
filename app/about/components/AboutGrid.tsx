'use client';

import '../../styles/pages.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

interface GridItem {
    id: string,
    photo: string,
    drawing: string,
    blurredPhoto?: string,
    blurredDrawing?:string,
  }

const AboutGrid: React.FC<{gridItems: GridItem[]}> = ({ gridItems }) => { 
    const [divVisibility, setDivVisibility] = useState<{[key: string]: boolean}>({
        "hello": true,
        "edu": true,
        "asp":true
    });
    const [blurImgs, setBlurImgs] = useState<{[key: string]: string}>({
        "photo1": "",
        "drawing1": "",
        "photo2": "",
        "drawing2": "",
        "photo3": "",
        "drawing3": ""
    });

    // image sources
    const photo1 = gridItems[0].photo;
    const drawing1 = gridItems[0].drawing;
    const photo2 = gridItems[1].photo;
    const drawing2 = gridItems[1].drawing;
    const photo3 = gridItems[2].photo;
    const drawing3 = gridItems[2].drawing;


    const toggleCover = (divId: string) => {
        setDivVisibility ({
            ...divVisibility,
            [divId]: !divVisibility[divId]
        });
    };
    
    return (
        <section className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3
                            grid-flow-col grid-things gap-[40px] pt-2 pb-8 transition-colors duration-500">

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("edu")}>

                <motion.div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.edu? "visible" : "hidden"}`}
                    whileHover={{ rotate: -6, x: -13 }}
                    transition={{ duration: 0.3 }}>

                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> education </span>
                    <motion.div className='bg-th-midground1 absolute w-full h-full z-10'
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={drawing1}
                            alt="Grad Photo Drawing" 
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </motion.div>
                    <div className='absolute w-full h-full'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={photo1}
                            alt='Grad Photo'
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </div>
                </motion.div>

                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                I am a recent graduate from <a href="https://www.umass.edu" target='_blank' className="font-bold underline">UMASS Amherst</a> with a Master's degree in <a href="https://www.cics.umass.edu/" target='_blank' className='font-bold underline'>Computer Science</a>. 
                </p>
            </div>

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("hello")}>

                <motion.div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.hello? "visible" : "hidden"}`}
                    whileHover={{ rotate: -4, x: 2, y: -14 }}
                    transition={{ duration: 0.3 }}>

                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> hello world </span>
                    <motion.div className='bg-th-midground1 absolute w-full h-full z-10'
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={drawing2}
                            alt="Grad Photo Drawing" 
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </motion.div>
                    <div className='absolute w-full h-full'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={photo2}
                            alt='Photo'
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </div>
                </motion.div>

                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                My name is <span className='text-3xl font-bold'>Sabrina</span> and my interest lies in the intersection of <span className='text-3xl font-bold'>art and technology</span>, with a passion to make my projects intuitive and visually pleasing :)
                </p>
            </div>

            <div className="bg-th-tertiary relative hover:cursor-pointer items-center flex"
                onClick={() => toggleCover("asp")}>

                <motion.div className={`absolute w-full h-full z-10 bg-th-midground ${divVisibility.asp? "visible" : "hidden"}`}
                    whileHover={{ rotate: 7, x: 11 }}
                    transition={{ duration: 0.3 }}>

                    <span className='text-[#3D4927] absolute z-20 pt-[360px] w-full text-center pointer-events-none font-bold text-xl'> aspirations </span>
                    <motion.div className='bg-th-midground1 absolute w-full h-full z-10'
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={drawing3}
                            alt="Grad Photo Drawing" 
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </motion.div>
                    <div className='absolute w-full h-full'>
                        <div className='polaroid-frame absolute w-full h-full'/>
                        <Image src={photo3}
                            alt='Photo'
                            width={600} height={400}
                            sizes="(max-width: 300px) 100vw, 300px"
                            className='w-full h-full object-cover object-center' />
                    </div>
                </motion.div>

                <p className='text-[#3D4927] mx-5 my-3 text-2xl/8 font-sans font-semibold whitespace-pre-wrap text-pretty transition-colors duration-500'>
                    I'd love to be able to contribute to improving the <span className='font-bold'>QoL</span> of people using my skills and knowledge 
                </p>
            </div>

            
        </section>
    );
}

export default AboutGrid;