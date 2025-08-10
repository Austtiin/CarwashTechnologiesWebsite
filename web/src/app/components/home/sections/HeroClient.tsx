'use client';

import React, { useState, useEffect } from 'react';
import RotatingText from '../../animations/RotatingText';

export default function HeroClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center lg:justify-start">
        <span className="px-4 py-3 text-lg lg:text-xl text-white font-semibold bg-gradient-to-r from-black/20 to-slate-400/30">
          Vehicle Wash
        </span>
        <div className="px-4 py-3 bg-yellow-300 min-w-40 justify-center">
          <RotatingText
            texts={[
              'Sales',
              'Service', 
              'Upgrades',
              'Maintenance',
              'Chemicals',
              'Planning',
              'Construction'
            ]}
            mainClassName="text-lg lg:text-xl font-bold text-gray-900"
            staggerFrom="center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            rotationInterval={2500}
            splitBy="characters"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-400/10 overflow-hidden shadow-lg">
        
        
      </div>
    </div>
  );
}