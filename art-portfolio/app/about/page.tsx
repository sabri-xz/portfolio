import path from "path";
import fs from "fs";
import '../styles/pages.css'
import AboutGrid from "./components/AboutGrid";

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'info.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

export default async function Home() {
    const info = await getInfo();

    return (
      <div className="page-container">
        <h1 className="text-6xl">ABouT me</h1>
        <AboutGrid />
      </div>
    );
  }