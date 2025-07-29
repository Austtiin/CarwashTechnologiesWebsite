"use client";

import React, { useState } from 'react';

// Define the cars with unique properties for animation and color
const cars = [
  { id: 1, color: 'text-red-600', delay: '0s', duration: '10s' },
  { id: 2, color: 'text-blue-600', delay: '4s', duration: '12s' },
  { id: 3, color: 'text-yellow-500', delay: '8s', duration: '9s' },
];

const CarWashAnimation: React.FC = () => {
  const [cleanCars, setCleanCars] = useState<number[]>([]);

  // Function to mark a car as clean when it passes the "roller"
  const handleCarPass = (carId: number) => {
    // A simple timeout to simulate the cleaning process after the car enters the roller area
    setTimeout(() => {
      setCleanCars(prev => [...prev, carId]);
    }, 1000); // Adjust this delay to synchronize with the roller animation
  };

  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg overflow-hidden">
      {/* CSS keyframes for the car movement and roller animation */}
      <style jsx>{`
        @keyframes driveThrough {
          0% {
            transform: translateX(-150px); /* Start off-screen left */
          }
          100% {
            transform: translateX(100vw); /* End off-screen right */
          }
        }

        @keyframes rollerSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .car-dirty {
          filter: grayscale(100%) brightness(0.7) sepia(0.5) hue-rotate(20deg); /* Makes the car look dirty */
          transition: filter 1s ease-out; /* Smooth transition for cleaning */
        }

        .car-clean {
          filter: none; /* Removes the dirty effect */
        }

        .roller {
          animation: rollerSpin 2s linear infinite;
        }
      `}</style>

      {/* Car Wash Structure */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full bg-gray-300 opacity-80 rounded-b-lg shadow-lg">
        {/* Entrance */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gray-400"></div>
        {/* Exit */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-400"></div>
        {/* Roller Placeholder */}
        <div className="absolute top-1/4 left-0 w-full h-1/2 flex items-center justify-center">
          <div className="w-32 h-32 bg-gray-600 rounded-full roller"></div>
        </div>
      </div>

      {/* Map over the cars array to render multiple cars */}
      {cars.map(car => (
        <div
          key={car.id}
          className="car-moving"
          style={{
            animationDelay: car.delay,
            animationDuration: car.duration,
          }}
          // We'll use a hidden div to detect when the car enters the "cleaning" zone
          onAnimationIteration={(e) => {
            // Check if the car is passing the carwash roller area (roughly 50% of the screen width)
            const carElement = e.currentTarget as HTMLElement;
            const carX = carElement.getBoundingClientRect().left;
            const carwashRollerX = window.innerWidth / 2;

            if (carX > carwashRollerX - 50 && carX < carwashRollerX + 50) { // A buffer zone
              handleCarPass(car.id);
            }
          }}
        >
          <svg width="120" height="60" viewBox="0 0 120 60" className={`${car.color} ${cleanCars.includes(car.id) ? 'car-clean' : 'car-dirty'}`}>
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
      <div className="absolute top-0 left-[calc(50%-40px)] w-2 h-full bg-blue-400 opacity-60 animate-pulse"></div>
      <div className="absolute top-0 left-[calc(50%+30px)] w-2 h-full bg-blue-400 opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute top-0 left-[calc(50%+100px)] w-2 h-full bg-blue-400 opacity-60 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
    </div>
  );
};

export default CarWashAnimation;