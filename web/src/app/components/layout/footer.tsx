import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Carwash Technologies</h3>
            <p className="text-gray-300 mb-4">
              Sales, Service and Consulting for the Midwest car wash industry.
            </p>
            <p className="text-gray-300 text-sm">
              Over 50 years of combined experience serving Minnesota, North Dakota, South Dakota, and Wisconsin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Recent Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recent Projects</h4>
            <ul className="space-y-2">
              <li><Link href="/projects#project1" className="text-gray-300 hover:text-yellow-400 transition-colors">Project One</Link></li>
              <li><Link href="/projects#project2" className="text-gray-300 hover:text-yellow-400 transition-colors">Project Two</Link></li>
              <li><Link href="/projects#project3" className="text-gray-300 hover:text-yellow-400 transition-colors">Project Three</Link></li>
              <li><Link href="/projects#project4" className="text-gray-300 hover:text-yellow-400 transition-colors">Project Four</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <p className="text-gray-300 mb-2">123 Carwash St.</p>
                        <p className="text-gray-300 mb-2">Washington, MN 55555</p>
                        <p className="text-gray-300 mb-2">Phone: (555) 123-4567</p>
                        <p className="text-gray-300 mb-2">Email: info@carwashtech.com</p>
                      </div>
                    </div>
                    <div className="mt-8 text-center text-gray-500 text-sm">
                      &copy; {new Date().getFullYear()} Carwash Technologies. All rights reserved.
                    </div>
                  </div>
                </footer>
              );
            };
            
            export default Footer;