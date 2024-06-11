"use client"

import { useEffect, useState } from 'react';
import ImageCard from "./ImageCard";
import { getImageDimensions } from '../utils/getImageDim';
import GalleryContainer from './GalleryContainer';

type Image = {
  src: string;
  width: number; 
  height: number
}

const Gallery: React.FC<{srcs: string[], galleryName: string}> = ({ srcs, galleryName }) => {
  let [images, setImages] = useState<Image[]>();
  let i = 0;

  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensionsPromises = srcs.map(async (src: string) => {
        try {
          const { width, height } = await getImageDimensions(src);
          return { src, width, height };
        } catch (error) {
          console.error('Error loading image:', error);
          return null;
        }
      });

      const imagesWithDimensions = await Promise.all(dimensionsPromises);
      const imgs: Image[] = imagesWithDimensions.filter((img): img is Image => img !== null);
      setImages(imgs);
    };

    fetchImageDimensions();
  }, [srcs]);

  if (!images) {
    return <div> gallery {galleryName} installation in progress </div>;
  }

  return (
    <GalleryContainer>
      <section className="grid grid-cols-gallery auto-rows-[10px]">
          {images.map(image => (
            <ImageCard 
              id={i++} 
              src={image.src} 
              height={image.height} 
              width={image.width}
              imageWidth={250}
            />
          ))}
      </section>
    </GalleryContainer>
  );
}

export default Gallery;