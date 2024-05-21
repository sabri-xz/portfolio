import * as fs from 'fs';
import * as path from 'path';
import sharp from "sharp";
import { NextApiRequest, NextApiResponse } from 'next';


type Image = {
  id: string;
  height: number;
  width: number;
  src: string;
}

async function importImages(req: NextApiRequest, res: NextApiResponse) {
  const images: Image[] = [];
  const dirPath = path.join(process.cwd(), 'imgs');
  console.log(dirPath);
  let i = 0;

  try {
    const files = await fs.promises.readdir(dirPath);
    const imgFiles = files.filter(file => file.endsWith('.jpg'));

    const imgPromises = imgFiles.map(async (img) => {
      const filePath = path.join(dirPath, img);
      const metadata = await sharp(filePath).metadata();
      const id = `${i++}`;
      if (typeof metadata.height === 'number' && typeof metadata.width === 'number') {
        images.push({
          id: id,
          height: metadata.height,
          width: metadata.width,
          src: `${filePath}`, // Adjust the path as needed
        });
      }
    });

    await Promise.all(imgPromises);

    // Save the fetched JSON data to a file
    const jsonFilePath = path.join(process.cwd(), 'fetched-images.json');
    try {
      await fs.promises.writeFile(jsonFilePath, JSON.stringify(images, null, 2));
      console.log('File saved successfully');
    } catch (error) {
      console.error('Error saving file:', error);
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Unable to scan directory: ' + error });
  };
}