// src/components/Navigation.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const serviceLinks = [
    { name: 'Equipment Sales', href: '/equipment-sales', description: 'Premium car wash equipment' },
    { name: 'Installation & Setup', href: '/installation-setup', description: 'Professional installation services' },
    { name: 'Service & Maintenance', href: '/service-maintenance', description: 'Ongoing support and repairs' },
    { name: 'Chemical Sales', href: '/chemical-sales', description: 'High-quality car wash chemicals' },
    { name: 'Safety Data Sheets', href: '/sds', description: 'Product safety information' },
    { name: 'Consulting Services', href: '/consulting-services', description: 'Expert guidance and planning' }
  ];

  // Event handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    // Auto-close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // FIXED: Better scroll management - prevent background scroll without affecting position
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent background scroll but maintain position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Function to close all menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Function to handle mobile navigation clicks
  const handleMobileNavClick = () => {
    closeAllMenus();
  };

  // Function to handle menu toggle with better state management
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
    setIsServicesOpen(false); // Close services when toggling main menu
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" ref={menuRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Logo / Business Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/logoCWT.webp"
              alt="Carwash Technologies Logo"
              width={48}
              height={48}
              className="w-8 h-auto sm:w-12"
              priority
            />
            <Link href="/" className="text-lg sm:text-2xl font-bold text-gray-900" onClick={closeAllMenus}>
              <span className="font-friz hidden sm:inline">Carwash Technologies</span>
              <span className="font-friz sm:hidden">CWT</span>
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
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:612-408-9010" className="hidden lg:block font-semibold text-gray-800 hover:text-yellow-500 transition-colors">
              612-408-9010
            </a>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400/60 to-yellow-300 text-black px-3 py-2 sm:px-6 text-sm sm:text-base rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 shadow-md hover:shadow-lg hover:text-slate-500/40"
              onClick={closeAllMenus}
            >
              <span className="hidden sm:inline">Get Quote</span>
              <span className="sm:hidden">Quote</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 relative z-50"
              onClick={handleMenuToggle}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* FIXED: Mobile Navigation with fixed positioning when open */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white border-b border-gray-200 shadow-lg z-40"
            style={{ maxHeight: 'calc(100vh - 4rem)' }} // Adjust based on header height
          >
            <div className="max-h-96 overflow-y-auto py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4 py-2"
                  onClick={handleMobileNavClick}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4 py-2"
                  onClick={handleMobileNavClick}
                >
                  About
                </Link>
                
                {/* Mobile Services Section */}
                <div className="px-4">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="font-medium text-gray-600 hover:text-yellow-500 transition-colors flex items-center justify-between w-full py-2"
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
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block text-sm text-gray-500 hover:text-yellow-500 transition-colors py-2 px-2 rounded"
                          onClick={handleMobileNavClick}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/projects" 
                  className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4 py-2"
                  onClick={handleMobileNavClick}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="font-medium text-gray-600 hover:text-yellow-500 transition-colors px-4 py-2"
                  onClick={handleMobileNavClick}
                >
                  Contact
                </Link>
                <a 
                  href="tel:612-408-9010" 
                  className="font-semibold text-gray-800 hover:text-yellow-500 transition-colors px-4 py-2"
                  onClick={handleMobileNavClick}
                >
                  📞 612-408-9010
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

