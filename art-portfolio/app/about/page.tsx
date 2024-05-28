import path from "path";
import fs from "fs";

const getInfo = async (): Promise<any[]> => {
  const filePath = path.join(process.cwd(), 'app/data', 'info.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const info: any = JSON.parse(jsonData);
  return info;
};

export default async function Home() {
    const info = await getInfo();
    
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }