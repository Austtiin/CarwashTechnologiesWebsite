import Link from 'next/link';

interface FooterProps {
  border?: boolean;
}

export default function Footer({ border = false }: FooterProps) {
  const navigation = {
    services: [
      { name: "Car Wash Construction", href: "/services" },
      { name: "Maintenance & Repairs", href: "/services" },
      { name: "Premium Chemicals", href: "/chemicals" },
      { name: "Equipment Upgrades", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
      { name: "Get Quote", href: "/contact" },
    ],
    support: [
      { name: "24/7 Support", href: "/contact" },
      { name: "Documentation", href: "/contact" },
      { name: "Maintenance", href: "/services" },
      { name: "Emergency Service", href: "/contact" },
    ],
  };

  return (
    <footer className={`bg-gray-900 ${border ? "border-t border-gray-800" : ""}`}>
      <div className="mx-auto max-w-7xl container-padding py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Carwash Technologies</h3>
            <p className="text-gray-400 mb-4">
              Professional car wash solutions with over 10 years of expertise serving the Upper Midwest.
            </p>
            <p className="text-yellow-400 font-semibold">612-408-9010</p>
            <p className="text-gray-400 text-sm">Minnesota, North Dakota, South Dakota & Wisconsin</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Carwash Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/contact" className="text-gray-400 hover:text-yellow-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-yellow-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
