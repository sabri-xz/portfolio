import { useEffect, useState } from 'react';

const GalleryContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [padding, setPadding] = useState(0);

  const updatePadding = () => {
    const windowWidth = window.innerWidth;
    const galleryWidth = Math.floor(windowWidth / 250) * 250;
    const newPadding = (windowWidth - galleryWidth) / 2;
    setPadding(newPadding);
  };

  useEffect(() => {
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <div style={{ paddingLeft: `${padding}px`, paddingRight: `${padding}px` }}>
      {children}
    </div>
  );
};

export default GalleryContainer;
