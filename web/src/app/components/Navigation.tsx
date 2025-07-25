// src/components/Navigation.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo / Business Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Carwash Technologies
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-600 hover:text-yellow-500">Home</Link>
            <Link href="/about" className="font-medium text-gray-600 hover:text-yellow-500">About</Link>
            <Link href="/services" className="font-medium text-gray-600 hover:text-yellow-500">Services</Link>
            <Link href="/projects" className="font-medium text-gray-600 hover:text-yellow-500">Projects</Link>
            <Link href="/contact" className="font-medium text-gray-600 hover:text-yellow-500">Contact</Link>
          </nav>
          
          {/* Phone & CTA */}
          <div className="flex items-center gap-4">
             <a href="tel:612-408-9010" className="hidden lg:block font-semibold text-gray-800">
              612-408-9010
            </a>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;