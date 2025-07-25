// src/components/Navigation.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-20 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/Carwash-Fuhr-1_edited-e1711686302538.png" 
                alt="Carwash Technologies Logo"
                width={180} 
                height={50}
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-yellow-500 transition-colors">Home</Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-yellow-500 transition-colors">About</Link>
            <Link href="/projects" className="font-medium text-gray-700 hover:text-yellow-500 transition-colors">Projects</Link>
            <Link href="/services" className="font-medium text-gray-700 hover:text-yellow-500 transition-colors">Services</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-yellow-500 transition-colors">Contact</Link>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="/contact" className="btn-primary hidden sm:block">
              Get Quote
            </Link>
            {/* You can add a mobile menu button here in the future */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;