import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-900 font-bold text-lg">
              Carwash Technologies
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 font-medium">
              About
            </Link>
            <Link href="/projects" className="text-gray-900 hover:text-gray-700 font-medium">
              Projects
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-gray-700 font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 font-medium">
              Contact
            </Link>
          </div>
          
          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <span className="hidden lg:block text-gray-900 font-medium">
              612-408-9010
            </span>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;