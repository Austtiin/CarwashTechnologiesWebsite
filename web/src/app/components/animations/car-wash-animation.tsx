"use client";

import React from 'react';

// Define the cars with unique properties for animation and color
const cars = [
  { id: 1, color: 'text-red-600', delay: '0s', duration: '10s' },
  { id: 2, color: 'text-blue-600', delay: '4s', duration: '12s' },
  { id: 3, color: 'text-yellow-500', delay: '8s', duration: '9s' },
];

const CarWashAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg overflow-hidden">
      {/* CSS keyframes for the car movement */}
      <style jsx>{`
        @keyframes driveThrough {
          from {
            transform: translateX(-150px); /* Start off-screen left */
          }
          to {
            transform: translateX(100vw); /* End off-screen right */
          }
        }
        .car-moving {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation-name: driveThrough;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      
      {/* Map over the cars array to render multiple cars */}
      {cars.map(car => (
        <div
          key={car.id}
          className="car-moving"
          style={{
            animationDelay: car.delay,
            animationDuration: car.duration,
          }}
        >
          <svg width="120" height="60" viewBox="0 0 120 60" className={car.color}>
            {/* Car body */}
            <rect x="10" y="25" width="80" height="20" rx="5" fill="currentColor" />
            <rect x="20" y="15" width="50" height="15" rx="3" fill="currentColor" />
            {/* Wheels */}
            <circle cx="25" cy="50" r="8" fill="#333" />
            <circle cx="75" cy="50" r="8" fill="#333" />
            <circle cx="25" cy="50" r="5" fill="#666" />
            <circle cx="75" cy="50" r="5" fill="#666" />
          </svg>
        </div>
      ))}
      
      {/* Soap suds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-bounce opacity-70"
            style={{
              width: `${Math.random() * 25 + 10}px`,
              height: `${Math.random() * 25 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60 + 20}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Water streams */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-blue-400 opacity-60 animate-pulse"></div>
      <div className="absolute top-0 left-1/2 w-1 h-full bg-blue-400 opacity-60 animate-pulse" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute top-0 left-3/4 w-1 h-full bg-blue-400 opacity-60 animate-pulse" style={{animationDelay: '0.6s'}}></div>
    </div>
  );
};

export default CarWashAnimation;