import ImageCard from "./ImageCard";

type Image = {
  id: string;
  height: number;
  width: number;
  src: string;
}

const Gallery: React.FC<{images: Image[]}> = ({ images }) => {
  let i = 0;


  return (
    <div className="grid grid-cols-4 gap-2 auto-rows-[10px]">
        {images.map(image => (
          <ImageCard key={i++} src={image.src} id={image.id} height={100} width={200} />
        ))}
    </div>
  );
}

export default Gallery;