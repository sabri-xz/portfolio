"use client"
import "../../styles/artPage.css"


const Directory: React.FC<{}> = () => {
    const handleScroll = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 0;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <p className="mt-24 px-12 w-full font-bold text-3xl"> directory </p>
            <div className="grid grid-cols-3 grid-rows-1 gap-12 w-full p-12 directory">
                <a className="w-auto h-64 bg-th-art1" 
                    href='#VisualArt'
                    onClick={(e) => handleScroll(e, 'VisualArt')}/>
                <a className="w-auto h-64 bg-th-art2" 
                    href='#Games'
                    onClick={(e) => handleScroll(e, 'Games')}/>
                <a className="w-auto h-64 bg-th-art3"
                    href='#Crafts'
                    onClick={(e) => handleScroll(e, 'Crafts')}/>
            </div>
        </div>
    )
}

export default Directory;