import { useState } from "react";
import { Averia_Serif_Libre } from "next/font/google";
import { motion } from "framer-motion";

const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

export const NameCard = ({nameFront, nameBack} : {nameFront: string, nameBack: string}) => {
    const [flipped, setFlipped] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleClick = () => {
        if (!animating) {
            setAnimating(true);
            setFlipped(!flipped);
        }
    };

    return (
        <div className="inline name-card h-[60px] ml-4 mb-1 cursor-pointer" onClick={handleClick}>
            <motion.div 
                className="namecard-inner w-full h-full"
                initial={false}
                animate={{ rotateX: flipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setAnimating(false)}
                style={{
                    transformStyle: "preserve-3d",
                }}
                >
                    <div className={`${averia.className} namecard-front text-6xl flex`}>
                        {nameFront}
                    </div>
                    <div className={`${averia.className} namecard-back text-6xl flex`}>
                        {nameBack}
                    </div>
            </motion.div>
        </div>
    );
};
