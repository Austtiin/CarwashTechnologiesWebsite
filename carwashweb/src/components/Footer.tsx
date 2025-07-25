import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 section-spacing">
      <div className="max-w-7xl mx-auto container-padding text-center">
        <p className="text-gray-900 font-medium mb-4">
          © {new Date().getFullYear()} Carwash Technologies. All rights reserved.
        </p>
        <p className="text-gray-800 mb-6">
          Contact us: <a href="tel:6124089010" className="font-semibold hover:underline">612-408-9010</a>
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/about" className="text-gray-900 hover:text-gray-700 font-medium">About Us</a>
          <a href="/projects" className="text-gray-900 hover:text-gray-700 font-medium">Projects</a>
          <a href="/services" className="text-gray-900 hover:text-gray-700 font-medium">Services</a>
          <a href="/contact" className="text-gray-900 hover:text-gray-700 font-medium">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
