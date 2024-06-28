import '../../styles/pages.css'
import Picture from './Picture';
import { Pic } from '../../types';

const PicturePile: React.FC<{pics: Pic[]}> = ( {pics} ) => {
    let i = 0
    return (
        <div className='mt-8 isolate'>
            <section className='flex relative md:w-[900px] sm:w-[370px] h-[750px]'>
                {
                    pics.map((pic: Pic, index: number) => {
                        return (
                            <Picture pic={pic} id={i++} key={index}/>
                        )
                    }) 
                }
            </section>

        </div>
    )
}

export default PicturePile;