import ImageCard from "./ImageCard";
import React, { useEffect, useState } from 'react';
import * as fs from 'fs';
import * as path from 'path';
import sharp from "sharp";

type Image = {
  id: string;
  height: number;
  width: number;
  src: string;
}

async function importImages(dirPath: string): Promise<Image[]> {
  const images: Image[] = [];
  let i = 0;

  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return reject('Unable to scan directory: ' + err);
      }

      const imgFiles = files.filter(file => file.endsWith('.jpg')); // Filter image files

      const imgPromises = imgFiles.map(img => {
        const filePath = path.join(dirPath, img);
        return sharp(filePath).metadata().then(metadata => {
          const id = `${i++}`;
          if (typeof metadata.height === 'number' && typeof metadata.width === 'number') {
            // only return if we have the height and width information
            images.push({ 
              id: id,
              height: metadata.height,
              width: metadata.width,
              src: filePath
            });
          }
        });
      });

      Promise.all(imgPromises)
        .then(() => resolve(images))
        .catch(err => reject(err));
    });
  });
}

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imgs = await importImages('../../../imgs');
        setImages(imgs);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <ImageCard src={image.src} id={image.id} height={image.height} width={image.width} />
      ))}
    </div>
  );

}