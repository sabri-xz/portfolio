export const getImageDimensions = (src: string): Promise<{ width: number, height: number }> => { 
  console.log(src);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
  });
};
