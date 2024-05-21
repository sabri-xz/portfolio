'use client';

import ImageCard from "./ImageCard";
import React, { useEffect, useState } from 'react';

type Image = {
  id: string;
  height: number;
  width: number;
  src: string;
}

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/api/import-images');
        const imgs = await response.json();
        setImages(imgs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  console.log(images);

  return (
    <div className="grid grid-cols-3 gap-4">
      {loading ? 
      (<div> loading.. </div>) : (
        images.map(image => (
          <ImageCard src={image.src} id={image.id} height={image.height} width={image.width} />
        ))
      )}
    </div>
  );
}