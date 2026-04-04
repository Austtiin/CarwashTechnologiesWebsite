// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <Image
                src="/logos/logoCWT.webp"
                alt="Carwash Technologies Logo"
                width={140}
                height={140}
                className="w-32 h-auto"
              />
            </div>
            <p className="text-sm text-gray-300 font-normal mb-4 leading-relaxed">
              Providing quality car wash equipment, chemicals, and service across the Midwest since 1999.
            </p>
            <div className="space-y-2 text-sm text-white">
              <p className="font-semibold text-white">Contact Us</p>
              <a href="tel:612-408-9010" className="flex items-center gap-2 hover:text-[#f0da11] transition-colors">
                <svg className="w-4 h-4 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (612) 408-9010
              </a>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#f0da11] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>322 19th St. SW<br />Forest Lake, MN 55025</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment-sales" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Equipment Sales
                </Link>
              </li>
              <li>
                <Link href="/installation-setup" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Installation & Setup
                </Link>
              </li>
              <li>
                <Link href="/service-maintenance" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Service & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/chemical-sales" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Chemical Sales
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/sds" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Safety Data Sheets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Minnesota
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Wisconsin
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Iowa
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                North Dakota
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </p>
              <p className="text-sm text-white">
                Mon-Fri: 8:00 AM - 5:00 PM<br />
                Emergency Service Available
              </p>
            </div>
          </div>
        </div>

        {/* Microsoft Clarity Disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            We improve our products and advertising by using Microsoft Clarity to see how you use our website.
            By using our site, you agree that we and Microsoft can collect and use this data.
            Our{' '}
            <a href="/privacy-policy" className="underline hover:text-[#f0da11] transition-colors">
              privacy statement
            </a>
            {' '}has more details.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">
              &copy; {new Date().getFullYear()} Carwash Technologies, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 justify-center md:justify-end">
              <Link href="/privacy-policy" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-white hover:text-[#f0da11] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;