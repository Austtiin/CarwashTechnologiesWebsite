// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6">
          <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
          <Link href="/services" className="text-gray-500 hover:text-gray-900">Services</Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Carwash Technologies, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;