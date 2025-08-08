'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Aurora from './Aurora';

export default function AuroraBackground() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const animationIdRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number>(0);

  // Memoize the color stops to prevent unnecessary re-renders
  const colorStops = useMemo(() => ["#00e5ff", "#f00000", "#ff00b7", "#06ffa5"], []);

  const updateTime = useCallback(() => {
    if (startTimeRef.current === 0) {
      startTimeRef.current = Date.now();
    }
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    setTime(elapsed);
    animationIdRef.current = requestAnimationFrame(updateTime);
  }, []);

  useEffect(() => {
    // Only start if not already active
    if (isActive) return;

    setIsActive(true);
    startTimeRef.current = Date.now();
    animationIdRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };
  }, [isActive, updateTime]);

  // Render a placeholder div while initializing to prevent layout shift
  if (!isActive) {
    return <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-0" />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Aurora
        colorStops={colorStops}
        blend={1.5}
        amplitude={0.65}
        speed={30.0}
        time={time}
      />
    </div>
  );
}