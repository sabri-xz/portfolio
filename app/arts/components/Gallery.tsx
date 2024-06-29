"use client"

import { useEffect, useState } from 'react';
import ImageCard from "./ImageCard";
import { getImageDimensions } from '../../utils/getImageDim';
import { Image, ImageWithDim } from '../../types';

const Gallery: React.FC<{imgs: Image[], galleryName: string}> = ({ imgs, galleryName }) => {
  let [images, setImages] = useState<ImageWithDim[]>();
  let i = 0;

  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensionsPromises = imgs.map(async (img: Image) => {
        try {
          const { width, height } = await getImageDimensions(img.src);
          const src = img.src;
          const alt = img.alt;
          return { src, alt, width, height };
        } catch (error) {
          console.error('Error loading image:', error);
          return null;
        }
      });

      const imagesWithDimensions = await Promise.all(dimensionsPromises);
      const imgsWithDim: ImageWithDim[] = imagesWithDimensions.filter((img): img is ImageWithDim => img !== null);
      setImages(imgsWithDim);
    };

    fetchImageDimensions();
  }, [imgs]);

  if (!images) {
    return <div> gallery {galleryName} installation in progress </div>;
  }

  return (
    <section className="grid grid-cols-gallery auto-rows-[10px] w-[900px] mx-auto">
        {images.map(image => (
          <ImageCard 
            id={i++} 
            key={i}
            imageWidth={283}
            img={image}
          />
        ))}
    </section>
  );
}

export default Gallery;