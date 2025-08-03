// src/components/Navigation.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { name: 'Equipment Sales', href: '/equipment-sales', description: 'Premium car wash equipment' },
    { name: 'Installation & Setup', href: '/installation-setup', description: 'Professional installation services' },
    { name: 'Service & Maintenance', href: '/service-maintenance', description: 'Ongoing support and repairs' },
    { name: 'Chemical Sales', href: '/chemical-sales', description: 'High-quality car wash chemicals' },
    { name: 'Safety Data Sheets', href: '/sds', description: 'Product safety information' },
    { name: 'Consulting Services', href: '/consulting-services', description: 'Expert guidance and planning' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo / Business Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logoCWT.webp"
              alt="Carwash Technologies Logo"
              width={48}
              height={48}
              className="w-12 h-auto" // Changed from "h-8 w-auto" to maintain aspect ratio
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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="font-medium text-gray-600 hover:text-yellow-500 transition-colors flex items-center focus:outline-none"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 transform transition-all duration-200 ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
                style={{ zIndex: 9999 }}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4">
                  <div className="grid gap-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block p-3 rounded-lg hover:bg-yellow-50 hover:border-yellow-200 border border-transparent transition-all duration-200 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 group-hover:text-gray-700">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
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
            <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg">
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
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4">
                Home
              </Link>
              <Link href="/about" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4">
                About
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-4">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="font-medium text-gray-600 hover:text-yellow-500 transition-colors flex items-center justify-between w-full"
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-sm text-gray-500 hover:text-yellow-500 transition-colors py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/projects" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4">
                Projects
              </Link>
              <Link href="/contact" className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4">
                Contact
              </Link>
              <a href="tel:612-408-9010" className="font-semibold text-gray-800 hover:text-yellow-500 transition-colors px-4">
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

