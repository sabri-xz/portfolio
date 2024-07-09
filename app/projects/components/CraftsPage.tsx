import Gallery from './Gallery';
import { Image } from "@/app/types";

const DoodlesPage: React.FC<{imgs: Image[]}> = ({imgs}) => {

    return (
        <div className="m-5 px-12 w-full">
            <h1 className='justify-self-center text-5xl font-medium'> Crafts </h1>
            <p className='mt-5 mb-12'> A peek into my sketch book :D </p>
            <Gallery imgs={imgs} galleryName="Doodles" />
        </div>
    );
}

export default DoodlesPage;