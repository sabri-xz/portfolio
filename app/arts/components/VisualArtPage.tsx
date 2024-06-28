import Gallery from './Gallery';

interface Image {
    src: string,
    alt: string
}

const GamePage: React.FC<{imgs: Image[]}> = ({imgs}) => {

    const srcs = imgs.map(img => img.src);


    return (
        <div className="m-5 px-12 w-full">
            <h1 className='justify-self-center text-5xl font-medium'> Visual Arts </h1>
            <p className='mt-5 mb-12'> Some artworks, traditional arts, digital arts, and some random sketches :) </p>
            <Gallery srcs={srcs} galleryName="Visual Arts" />
        </div>
    );
}

export default GamePage;