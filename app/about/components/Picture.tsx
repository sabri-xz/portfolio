import '../../styles/pages.css'
import Image from 'next/image';

interface Pic {
    src: string,
    alt: string,
    description: string
}

const Picture: React.FC<{pic: Pic, id: number}> = ( {pic, id} ) => {
    return (
        <div className='picture'
            id={`pic-${id}`}>
            <div className='polaroid-frame absolute w-full h-full'/>
            <Image src={pic.src} 
                alt={pic.alt}
                width={600} height={400}
                className='w-full h-full object-cover object-center' />
        </div>
    )
}

export default Picture;