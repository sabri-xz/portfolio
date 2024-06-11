import path from "path";
import fs from "fs";
import '../styles/pages.css'
import localFont from 'next/font/local'

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'aboutme.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

const myFont = localFont({ src: '../JuanMikes.otf' })

export default async function Home() {
    const info: any = await getInfo();

    return (
      <div className={`page-container flex flex-col ${myFont.className}`}>
        <h1 className="text-6xl text-left w-auto">Projects</h1>
      </div>
    );
}