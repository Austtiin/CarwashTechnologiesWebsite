import React from 'react';
import Image from 'next/image';
import CarWashAnimation from '../animations/car-wash-animation';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/imgs/HomeHero.png"
          alt="Car Wash Background"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.85 }}
        />
        {/* Subtle overlay to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>
      
      {/* Car Wash Animation Layer */}
      <div className="absolute inset-0 z-10">
        <CarWashAnimation />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Carwash Technologies</h1>
        <p className="text-lg mb-8 drop-shadow-md">
          Your one-stop solution for Vehicle Wash, Sales, Service, and Consulting in Minnesota, North Dakota, South Dakota, and Wisconsin.
        </p>
        <a href="/contact#contact-inquiry" className="btn-primary">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;