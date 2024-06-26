

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}

const CraftsPage: React.FC<{}> = () => {
    return (
        <div className="m-5 px-12">
            <h1 className='justify-self-center text-5xl'> Crafts </h1>
            <p> I have dabbled in some crafts here and there :D </p>
        </div>
    );
}

export default CraftsPage;