import path from "path";
import fs from "fs";
import '../styles/pages.css'
import localFont from 'next/font/local'
import WIPPage from "../components/WIPPage";

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
      // <div className={`page-container flex flex-col ${myFont.className}`}>
      <div className="page-container flex flex-col">
        <WIPPage pageTitle="Projects"/>
      </div>
    );
}