
import { useState } from 'react';
import '../../styles/pages.css'
import Image from 'next/image';

interface Pic {
    src: string,
    alt: string,
    description: string
}

const Picture: React.FC<{pic: Pic, id: number}> = ( {pic, id} ) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            {!clicked && (<div className='picture cursor-pointer z-0'
                id={`pic-${id}`} 
                onClick={() => {
                    setClicked(!clicked)
                }}>

                <div className='polaroid-frame absolute w-full h-full z-10'/>
                <Image src={pic.src} 
                    alt={pic.alt}
                    width={600} height={400}
                    className='w-full h-full object-cover object-center z-0' />

            </div>)}
            {clicked && (<div className='picture cursor-pointer' 
                style={{top: 0, left: 60}}
                onClick={() => {
                    setClicked(!clicked)
                }}>

                <div className='polaroid-frame absolute w-[480px] h-[735px] z-30'/>
                <div className='absolute w-[480px] h-[735px] z-20'>
                    <Image src={pic.src} 
                        alt={pic.alt}
                        width={600} height={400}
                        className='w-full h-full object-cover object-center' />
                </div>

                <span className='absolute top-0 left-[500px]'>
                    {pic.description}
                </span>
            </div>)}
        </div>        
    )
}

export default Picture;