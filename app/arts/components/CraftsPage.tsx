import Gallery from './Gallery';
import { Image } from "@/app/types";

const CraftsPage: React.FC<{imgs: Image[]}> = ({imgs}) => {

    return (
        <div className="m-5 px-12 w-full">
            <h1 className='justify-self-center text-5xl font-medium'> Crafts </h1>
            <p className='mt-5 mb-12'> I dabble in some crafts here and there :D </p>
            <Gallery imgs={imgs} galleryName="Visual Arts" />
        </div>
    );
}

export default CraftsPage;