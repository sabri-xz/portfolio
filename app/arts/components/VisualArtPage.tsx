import Gallery from './Gallery';

interface Image {
    src: string,
    alt: string
}

const GamePage: React.FC<{imgs: Image[]}> = ({imgs}) => {

    const srcs = imgs.map(img => img.src);


    return (
        <div className="m-5 px-12">
            <h1 className='justify-self-center text-5xl'> Visual Arts </h1>
            <p> Some artworks, traditional and digital and sketches :) </p>
            <Gallery srcs={srcs} galleryName="Visual Arts" />
        </div>
    );
}

export default GamePage;