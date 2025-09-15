import path from 'path';
import fs from "fs";
import '../styles/pages.css'
import '../styles/animation.css'

const getInfo = async ( jsonFile: string, section: string ): Promise<any[]> => {
    const filePath = path.join(process.cwd(), 'app/data', jsonFile);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const info: any[] = await JSON.parse(jsonData)[section];
    return info;
};

export default async function Home() { 
  
    return (
        <div className='page-container flex-col items-center'>
            <div> :D </div>
        </div>
    );
  }