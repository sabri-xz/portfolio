'use client'

import { useEffect, useState } from'react';
import { useAnimate, animate } from "framer-motion";

type AnimationSequence = Parameters<typeof animate>[0] & any[];

export const NewCursor: React.FC = () => {
    const [isPointer, setIsPointer] = useState<boolean>(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({x: e.clientX, y: e.clientY});
        const target = e.target as HTMLElement;

        setIsPointer(window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer');
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Calculate the size of the flare based on whether the cursor is over a clickable element.
    const flareSize = isPointer ? 0 : 30;

    // Adjust the cursor position to create a visual effect when over a clickable element.
    const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

    return (
        <div>
            <div
                className={`new-cursor ${isPointer ? "pointer" : ""}`}
                style={{
                    ...cursorStyle,
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${flareSize}px`,
                    height: `${flareSize}px`,
                }}/>
        </div>
        
    );
}
