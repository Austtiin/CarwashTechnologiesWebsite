// src/components/Navigation.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const serviceLinks = [
    { name: 'Equipment Sales',       href: '/equipment-sales',    description: 'Premium car wash equipment' },
    { name: 'Installation & Setup',  href: '/installation-setup', description: 'Professional installation services' },
    { name: 'Service & Maintenance', href: '/service-maintenance', description: 'Ongoing support and repairs' },
    { name: 'Chemical Sales',        href: '/chemical-sales',     description: 'High-quality car wash chemicals' },
    { name: 'Safety Data Sheets',    href: '/sds',                description: 'Product safety information' },
    { name: 'Consulting Services',   href: '/consulting',         description: 'Expert guidance and planning' },
  ];

  // Close panel on route change (handles browser back/forward too)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Close on outside click; close at lg breakpoint on resize
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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

  // Lock background scroll while mobile panel is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" ref={menuRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 lg:h-17 items-center justify-between relative">

          {/* Logo */}
          <div className="absolute left-0 flex items-center space-x-2 sm:space-x-2.5">
            <Image
              src="/logos/logoCWT.webp"
              alt="Carwash Technologies Logo"
              width={48}
              height={48}
              className="w-10 h-auto sm:w-11"
              priority
            />
            <Link href="/" className="text-sm sm:text-lg font-bold text-gray-900" onClick={closeAllMenus}>
              <span className="font-friz hidden sm:inline">Carwash Technologies</span>
              <span className="font-friz sm:hidden">CWT</span>
            </Link>
          </div>

          {/*
            Desktop nav — starts at lg (1024px) so all 6 links fit comfortably.
            At md (768px) the logo + 6 links + CTA was too crowded (~336px available
            for ~490px of links), causing items to squish into the buttons.
          */}
          <nav className="hidden lg:flex items-center space-x-4 lg:space-x-5 xl:space-x-6 ml-auto mr-40 xl:mr-48">
            <Link href="/" className={`text-sm font-medium transition-colors pb-0.5 ${
              isActive('/') ? 'text-[#d0b211] border-b-2 border-[#f0da11]' : 'text-gray-700 hover:text-[#d0b211]'
            }`}>Home</Link>

            <Link href="/about" className={`text-sm font-medium transition-colors pb-0.5 ${
              isActive('/about') ? 'text-[#d0b211] border-b-2 border-[#f0da11]' : 'text-gray-700 hover:text-[#d0b211]'
            }`}>About</Link>

            <Link href="/who-we-serve" className={`text-sm font-medium whitespace-nowrap transition-colors pb-0.5 ${
              isActive('/who-we-serve') ? 'text-[#d0b211] border-b-2 border-[#f0da11]' : 'text-gray-700 hover:text-[#d0b211]'
            }`}>Who We Serve</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className={`text-sm font-medium whitespace-nowrap transition-colors flex items-center focus:outline-none pb-0.5 ${
                  serviceLinks.some(l => isActive(l.href))
                    ? 'text-[#d0b211] border-b-2 border-[#f0da11]'
                    : 'text-gray-700 hover:text-[#d0b211]'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(v => !v)}
              >
                What We Do
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                style={{ zIndex: 9999 }}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4 grid gap-2">
                  {serviceLinks.map(link => (
                    <Link key={link.name} href={link.href}
                      className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium text-gray-900 group-hover:text-[#d0b211] transition-colors">{link.name}</div>
                      <div className="text-sm text-gray-600 mt-0.5 group-hover:text-gray-700">{link.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/careers" className={`text-sm font-medium transition-colors pb-0.5 ${
              isActive('/careers') ? 'text-[#d0b211] border-b-2 border-[#f0da11]' : 'text-gray-700 hover:text-[#d0b211]'
            }`}>Careers</Link>

            <Link href="/contact" className={`text-sm font-medium transition-colors pb-0.5 ${
              isActive('/contact') ? 'text-[#d0b211] border-b-2 border-[#f0da11]' : 'text-gray-700 hover:text-[#d0b211]'
            }`}>Contact</Link>
          </nav>

          {/* CTA button + hamburger (hamburger visible below lg) */}
          <div className="absolute right-0 flex items-center gap-2 sm:gap-3">
            <a
              href="tel:612-408-9010"
              className="bg-[#f0da11] text-black px-3 py-2 sm:px-4 rounded-md font-semibold hover:bg-[#d0b211] transition-colors shadow-md hover:shadow-lg whitespace-nowrap text-sm"
            >
              <span className="hidden sm:inline">Call (612) 408-9010</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => { setIsMenuOpen(v => !v); setIsServicesOpen(false); }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*
        Mobile panel — anchored to start BELOW the header (top-14 / sm:top-16)
        so links are never hidden behind the fixed nav bar.
      */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Dimmed overlay — also starts below header so the bar stays visible */}
          <div
            className="absolute top-14 sm:top-16 inset-x-0 bottom-0 bg-black/50"
            onClick={closeAllMenus}
          />

          {/* Slide panel */}
          <div className="absolute top-14 sm:top-16 right-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl overflow-y-auto">
            <nav className="flex flex-col py-2">
              <Link href="/" onClick={closeAllMenus}
                className={`px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive('/') ? 'text-[#d0b211] bg-yellow-50' : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                }`}>
                Home
              </Link>

              <Link href="/about" onClick={closeAllMenus}
                className={`px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive('/about') ? 'text-[#d0b211] bg-yellow-50' : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                }`}>
                About
              </Link>

              <Link href="/who-we-serve" onClick={closeAllMenus}
                className={`px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive('/who-we-serve') ? 'text-[#d0b211] bg-yellow-50' : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                }`}>
                Who We Serve
              </Link>

              {/* What We Do accordion */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsServicesOpen(v => !v)}
                  className={`w-full px-6 py-4 text-base font-medium text-left flex items-center justify-between transition-colors ${
                    serviceLinks.some(l => isActive(l.href))
                      ? 'text-[#d0b211] bg-yellow-50'
                      : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                  }`}
                >
                  What We Do
                  <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="bg-slate-50 border-t border-gray-100">
                    {serviceLinks.map(link => (
                      <Link key={link.name} href={link.href} onClick={closeAllMenus}
                        className={`block px-8 py-3 text-sm font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
                          isActive(link.href)
                            ? 'text-[#d0b211]'
                            : 'text-gray-600 hover:text-[#d0b211] hover:bg-white'
                        }`}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/careers" onClick={closeAllMenus}
                className={`px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive('/careers') ? 'text-[#d0b211] bg-yellow-50' : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                }`}>
                Careers
              </Link>

              <Link href="/contact" onClick={closeAllMenus}
                className={`px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive('/contact') ? 'text-[#d0b211] bg-yellow-50' : 'text-gray-800 hover:text-[#d0b211] hover:bg-gray-50'
                }`}>
                Contact
              </Link>

              {/* Phone CTA in panel */}
              <div className="px-6 py-5">
                <a
                  href="tel:612-408-9010"
                  onClick={closeAllMenus}
                  className="flex items-center justify-center gap-2 w-full bg-[#f0da11] text-black px-4 py-3.5 rounded-md font-bold hover:bg-[#d0b211] transition-colors text-base shadow-sm"
                >
                  Call (612) 408-9010
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
