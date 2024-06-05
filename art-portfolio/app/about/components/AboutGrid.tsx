import '../../styles/pages.css'
import Image from 'next/image';

const AboutGrid: React.FC<{}> = () => {
    return (
        <section className="grid md:grid-rows-3 md:grid-cols-3 grid-cols-1 grid-rows-9 grid-flow-col aspect-16-9 gap-[40px] px-6 pt-6">
            <div className="bg-th-tertiary">
                I am a recent graduate from UMASS AMHERST
            </div>
            <div className="bg-th-tertiary">
                experiences
            </div>
            <div className="bg-th-tertiary relative">
                <div className='polaroid-frame absolute w-full h-full'/>
                7
            </div>
            <div className="bg-th-tertiary relative">
                <div className='polaroid-frame absolute w-full h-full'/>
                <Image src="https://raw.githubusercontent.com/sabri-xz/portfolio/main/art-portfolio/imgs/about-me/gradpic.png" 
                       alt="Grad Photo Drawing" 
                       width={600} height={400}
                       className='w-full h-full object-cover object-center hover:opacity-50 transition-opacity' />
            </div>
            <div className="bg-th-tertiary">
                5
            </div>
            <div className="bg-th-tertiary">
                i love PLANTS
            </div>
            <div className="bg-th-tertiary">
                CourseWork
            </div>
            <div className="bg-th-tertiary">
                music
            </div>
            <div className="bg-th-tertiary">
                art history
            </div>
        </section>
    );
}

export default AboutGrid;