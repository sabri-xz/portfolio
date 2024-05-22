import Gallery from "../components/Gallery";
import path from 'path';
import fs from "fs";

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


export default async function Home() {
  const images = await getImages();
  console.log(images);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold"> Hello World! </h1>

      <Gallery images={images} />
      
      <div className="grid grid-cols-3 gap-4"> ${process.cwd()} </div>
    </main>
  );
}
