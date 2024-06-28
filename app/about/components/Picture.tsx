"use client"

import { useEffect, useState } from 'react';
import '../../styles/pages.css'
import Image from 'next/image';
import { getImageDimensions } from '../../utils/getImageDim';

interface Pic {
    src: string,
    alt: string,
    description: string
}

interface NewPic {
    src: string,
    alt: string,
    description: string,
    width: number,
    height: number,
    cWidth: number,
    cHeight: number
}

const Picture: React.FC<{pic: Pic, id: number}> = ( {pic, id} ) => {
    const [clicked, setClicked] = useState(false);
    const [newPic, setNewPic] = useState<NewPic>({ src: '', alt: '', description: '', width: 0, height: 0, cWidth: 0, cHeight: 0 })

    useEffect(() => {
        const updateImg = async () => {
            const src = pic.src
            let dim = { src: src, width: 0, height: 0 }

            function calcDim(width: number, height: number, idealH: number) {
                if (width === 0 || height === 0) {
                    return {width: 0, height: 0}
                }
                const w = Math.ceil(width * idealH / height);
                return {width: w, height: idealH}
            }

            try {
                const { width, height } = await getImageDimensions(src);
                dim = { src, width, height };
            } catch (error) {
                console.error('Error loading image:', error);
                dim = { src, width: 0, height: 0 };
            }

            const unclickedDim = calcDim(dim.width, dim.height, 420)
            const clickedDim = calcDim(dim.width, dim.height, 735)

            setNewPic({
                src: dim.src,
                alt: pic.alt,
                description: pic.description,
                width: unclickedDim.width,
                height: unclickedDim.height,
                cWidth: clickedDim.width,
                cHeight: clickedDim.height
            })
        }
        updateImg();
    }, []);

    

    return (
        <div id={`pic-container-${id}`}>
            {!clicked && (
                <div className='picture cursor-pointer z-0'
                    id={`pic-${id}`} 
                    onClick={() => {
                        setClicked(!clicked) }}
                    style={{width: newPic.width, height: newPic.height}}>
                    <div className='polaroid-frame absolute w-full h-full z-0'/>
                    <Image src={pic.src} 
                        alt={pic.alt}
                        width={600} height={400}
                        sizes="(max-width: 420px) 100vw, 420px"
                        className='w-full h-full object-cover object-center z-0' />
                </div>
                )
            }
            {clicked && (
                <div className='picture cursor-pointer z-30' 
                    style={{top: 0, left: (900 - newPic.cWidth)/2, width: newPic.cWidth, height: newPic.cHeight}}
                    onClick={() => {
                        setClicked(!clicked)
                }}>
                    <div className={`polaroid-frame absolute w-full h-full z-20`}/>
                    <div className={`absolute w-full h-full z-10`}>
                        <Image src={pic.src} 
                            alt={pic.alt}
                            width={600} height={400}
                            sizes="(max-width: 700px) 100vw, 50vw"
                            className='w-full h-full object-cover object-center' />
                    </div>

                    <span className="absolute z-30"
                        style={{top: 675, left: 20, width: newPic.cWidth - 40}}>
                        <p className='font-semibold text-xl'> {pic.description} </p>
                    </span>
                </div>
                )
            }
        </div>        
    )
}

export default Picture;