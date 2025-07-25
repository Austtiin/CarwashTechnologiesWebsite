import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-white hover:text-yellow-400">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:text-yellow-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-yellow-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;