import React from 'react';
import CarWashAnimation from '../animations/car-wash-animation';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <CarWashAnimation />
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Carwash Technologies</h1>
        <p className="text-lg mb-8">
          Your one-stop solution for Vehicle Wash, Sales, Service, and Consulting in Minnesota, North Dakota, South Dakota, and Wisconsin.
        </p>
        <a href="/contact" className="btn-primary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;