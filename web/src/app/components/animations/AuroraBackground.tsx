'use client';

import React, { useState, useEffect } from 'react';
import Aurora from './Aurora';

export default function AuroraBackground() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const animationIdRef = React.useRef<number>();

  useEffect(() => {
    const startTime = Date.now();

    const updateTime = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTime(elapsed);
      animationIdRef.current = requestAnimationFrame(updateTime);
    };

    // Start Aurora animation
    const timer = setTimeout(() => {
      animationIdRef.current = requestAnimationFrame(updateTime);
      setIsActive(true);
    }, 200);

    return () => {
      clearTimeout(timer);
      if (animationIdRef.current !== undefined) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Aurora
        colorStops={["#00e5ff", "#f00000", "#ff00b7", "#06ffa5"]}
        blend={2.5}
        amplitude={0.65}
        speed={15.0}
        time={time}
      />
    </div>
  );
}