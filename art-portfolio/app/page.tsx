import path from 'path';
import fs from "fs";
import StartPage from "./components/StartPage";

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'info.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

export default async function Home() {
  const infomation: any = await getInfo();

  return (
    <StartPage info={ infomation }/>
  );
}
