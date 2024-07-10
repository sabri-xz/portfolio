'use client'

import { useEffect, useState } from'react';
import { stagger, useAnimate, animate } from "framer-motion";

type AnimationSequence = Parameters<typeof animate>[0];

const NewCursor: React.FC = () => {
    const [isPointer, setIsPointer] = useState<boolean>(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [scope, animate] = useAnimate();

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({x: e.clientX, y: e.clientY});
        const target = e.target as HTMLElement;

        setIsPointer(window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer');
    }

    const rand = (min: number, max: number, integer: boolean) => {
        if (!integer) {
            return (Math.random() * (max - min + 1)) + min;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const growFlowers = (e: MouseEvent) => {
        const flowers = Array.from( { length: rand(3, 5, true) });
        const cursorPos = {x: e.clientX, y: e.clientY}
        console.log(cursorPos)

        const flowerAni: AnimationSequence = flowers.map((_, index) => [
            `.sparkle-${index}`,
            { 
                left: cursorPos.x + rand(-40, 40, false),
                top: cursorPos.y + rand(-40, 40, false),
                scale: rand(0.5, 1, false),
                opacity: rand(0.4, 0.8, false)
            },
            {
                duration: 0.3,
                at: '<',
            }
        ]);

        const flowerFade: AnimationSequence = flowers.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
            },
            {
                duration: 0.1,  // Adjust this value for a faster fade
            }
        ]);

        const reset: AnimationSequence = flowers.map((_, index) => [
            `.sparkle-${index}`,
            {
                left: cursorPos.x,
                top: cursorPos.y,
                opacity: 0
            },
            {
              duration: 0.001
            },
          ]);

        animate([
            ...reset,
            ...flowerAni,
            ...flowerFade
            
        ]);
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', growFlowers);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', growFlowers);
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

            <span
                className="pointer-events-none fixed inset-0 z-50 block"
                ref={scope}
            >
            {Array.from({ length: 5 }).map((_, index) => (
                <svg width="20" height="20" 
                    className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index} text-th-tertiary`}
                    key={index}>
               <circle cx="10" cy="10" r="10" fill="currentcolor" />
           </svg>
            ))}
            </span>
        </div>
        
    );
}

export default NewCursor;