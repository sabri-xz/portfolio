"use client"
import "../../styles/artPage.css"
import { motion } from "framer-motion"

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
        <motion.div className="pt-32 pb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}>
            <p className="px-12 w-full font-semibold text-3xl underline"> directory </p>
            <div className="grid grid-cols-3 grid-rows-1 gap-12 w-full p-12 directory">
                <a className="w-auto h-64 bg-th-art1 transition-colors duration-500" 
                    href='#VisualArt'
                    onClick={(e) => handleScroll(e, 'VisualArt')}/>
                <a className="w-auto h-64 bg-th-art2 transition-colors duration-500" 
                    href='#Games'
                    onClick={(e) => handleScroll(e, 'Games')}/>
                <a className="w-auto h-64 bg-th-art3 transition-colors duration-500"
                    href='#Crafts'
                    onClick={(e) => handleScroll(e, 'Crafts')}/>
            </div>
        </motion.div>
    )
}

export default Directory;