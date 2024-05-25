import path from 'path';
import fs from "fs";
import Gallery from '../components/Gallery';

type Image = {
    id: string;
    height: number;
    width: number;
    src: string;
}
  
const getImages = async (): Promise<Image[]> => {
    const filePath = path.join(process.cwd(), 'app/data', 'imgSources.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const images: Image[] = JSON.parse(jsonData)['placeholders'];
    return images;
};

const getSrcs = (imgs:Image[]): string[] => {
    return imgs.map(img => img.src);
}

export default async function Home() {
    const images = await getImages();
    const srcs = getSrcs(images);
  
    return (
        <div>
            <h1 className='justify-self-center text-xl'>Placeholder Gallery</h1>
            <Gallery srcs={srcs} galleryName="placeholder"/>
        </div>
    );
  }