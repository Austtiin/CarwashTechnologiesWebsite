// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logos/logoCWT.webp"
                alt="Carwash Technologies Logo"
                width={40}
                height={40}
                className="w-10 h-auto"
              />
              <span className="text-lg font-bold text-gray-900">Carwash Technologies</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Providing quality car wash equipment, chemicals, and service across the Midwest since 1999.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-semibold text-gray-900">Contact Us</p>
              <a href="tel:612-408-9010" className="block hover:text-[#f0da11] transition-colors">
                📞 (612) 408-9010
              </a>
              <p>📍 322 19th St. SW<br />Forest Lake, MN 55025</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment-sales" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Equipment Sales
                </Link>
              </li>
              <li>
                <Link href="/installation-setup" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Installation & Setup
                </Link>
              </li>
              <li>
                <Link href="/service-maintenance" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Service & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/chemical-sales" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Chemical Sales
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/sds" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Safety Data Sheets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>🗺️ Minnesota</li>
              <li>🗺️ Wisconsin</li>
              <li>🗺️ Iowa</li>
              <li>🗺️ North Dakota</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Business Hours</p>
              <p className="text-sm text-gray-600">
                Mon-Fri: 8:00 AM - 5:00 PM<br />
                Emergency Service Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Carwash Technologies, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-[#f0da11] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;