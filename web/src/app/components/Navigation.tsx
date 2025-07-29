// src/components/Navigation.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo / Business Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/Carwash-Fuhr (1)_edited.png"
              alt="Carwash Technologies Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Carwash Technologies
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Phone & CTA */}
          <div className="flex items-center gap-4">
            <a href="tel:612-408-9010" className="hidden lg:block font-semibold text-gray-800 hover:text-yellow-500 transition-colors">
              612-408-9010
            </a>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
                About
              </Link>
              <Link href="/services" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
                Services
              </Link>
              <Link href="/projects" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors">
                Contact
              </Link>
              <a href="tel:612-408-9010" className="font-semibold text-gray-800 hover:text-yellow-500 transition-colors">
                612-408-9010
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;