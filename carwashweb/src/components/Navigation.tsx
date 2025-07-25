// src/components/Navigation.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/Carwash-Fuhr-1_edited-e1711686302538.png" 
                alt="Carwash Technologies Logo"
                width={150} 
                height={40}
                priority
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-dark hover:text-secondary font-medium">Home</Link>
            <Link href="/about" className="text-secondary-dark hover:text-secondary font-medium">About</Link>
            <Link href="/projects" className="text-secondary-dark hover:text-secondary font-medium">Projects</Link>
            <Link href="/services" className="text-secondary-dark hover:text-secondary font-medium">Services</Link>
            <Link href="/contact" className="text-secondary-dark hover:text-secondary font-medium">Contact</Link>
          </div>
          
          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <span className="hidden lg:block text-secondary-dark font-medium">
              612-408-9010
            </span>
            <Link href="/contact" className="btn-secondary"> {/* Using the new secondary button style */}
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;