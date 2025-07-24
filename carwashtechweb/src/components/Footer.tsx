import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">© {new Date().getFullYear()} Carwash Technologies. All rights reserved.</p>
        <p>Contact us: <a href="tel:6124089010" className="underline">612-408-9010</a></p>
        <div className="mt-2">
          <a href="/about" className="text-white hover:underline mx-2">About Us</a>
          <a href="/projects" className="text-white hover:underline mx-2">Projects</a>
          <a href="/services" className="text-white hover:underline mx-2">Services</a>
          <a href="/contact" className="text-white hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;