import React from 'react';

const Hero = () => {
  return (
    <div className="bg-yellow-400 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Carwash Technologies</h1>
      <p className="mt-4 text-lg">Your one-stop solution for all car wash needs!</p>
      <a
        href="/contact"
        className="mt-6 inline-block bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Hero;