import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          Carwash Technologies
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>
        <div className="text-white">
          <span>Call us: 612-408-9010</span>
          <Link href="/contact" className="ml-4 bg-white text-yellow-500 rounded px-3 py-1 hover:bg-yellow-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;