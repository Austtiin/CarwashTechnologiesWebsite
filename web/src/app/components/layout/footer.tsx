import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Carwash Technologies. All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="/services" className="text-gray-400 hover:text-white mx-2">Services</a>
          <a href="/projects" className="text-gray-400 hover:text-white mx-2">Projects</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;