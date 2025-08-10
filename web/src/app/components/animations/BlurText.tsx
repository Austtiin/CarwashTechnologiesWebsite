'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const BlurText = ({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.8 
}: BlurTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div className={`${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ 
                opacity: 0,
                filter: 'blur(10px)',
                y: 20
              }}
              animate={isVisible ? { 
                opacity: 1,
                filter: 'blur(0px)',
                y: 0
              } : {}}
              transition={{ 
                duration: duration,
                delay: (wordIndex * 0.1) + (charIndex * 0.05),
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default BlurText;