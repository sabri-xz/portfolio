'use client'

import { useEffect } from "react";
import '../../styles/animation.css';

const createSparkle = () => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Set random position
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    
    // Set random size
    const size = Math.random() * 50 + 10; // Between 10px and 60px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
  
    document.getElementById('sparkle-container')?.appendChild(sparkle);
  
    // Remove the sparkle after animation is complete
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
  };
  
const addSparkles = () => {
  const intervalId = setInterval(createSparkle, 1000); // Adjust the interval as needed
  return () => clearInterval(intervalId);
};

const PageSparkles: React.FC = () => {
  useEffect(() => {
        addSparkles();
    }, []);

    return (
      <div className="sparkle-container z-0" id="sparkle-container"> </div>
    );
}

export default PageSparkles;