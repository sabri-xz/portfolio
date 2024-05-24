import Gallery from "./components/Gallery";
import path from 'path';
import fs from "fs";
import Image from "next/image";

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
  // console.log(images);

  return (
    <main className="flex min-h-screen flex-col justify-between p-16">
      <h1 className="text-6xl font-bold text-center"> Portfolio </h1>

      <Gallery srcs={srcs} galleryName="test" />

      <div className="grid grid-cols-3 gap-4"> ${process.cwd()} </div>
    </main>
  );
}
