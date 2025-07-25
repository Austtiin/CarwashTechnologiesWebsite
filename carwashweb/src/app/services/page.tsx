import Link from "next/link";

const services = [
  {
    id: "construction",
    title: "Car Wash Construction",
    description: "Complete design-build services for modern car wash facilities",
    features: [
      "Custom facility design and engineering",
      "Site preparation and construction management",
      "Equipment installation and testing",
      "Permit assistance and code compliance",
      "Turnkey solutions from concept to completion",
    ],
    icon: "🏗️",
    image: "/api/placeholder/600/400",
  },
  {
    id: "maintenance",
    title: "Maintenance & Repairs",
    description: "Expert maintenance services to keep your car wash running at peak performance",
    features: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "Equipment troubleshooting and diagnostics",
      "Replacement parts and components",
      "24/7 technical support",
    ],
    icon: "🔧",
    image: "/api/placeholder/600/400",
  },
  {
    id: "upgrades",
    title: "Equipment Upgrades",
    description: "Modernize your car wash with cutting-edge technology and equipment",
    features: [
      "Latest car wash technology integration",
      "Energy-efficient equipment upgrades",
      "Payment system modernization",
      "Automated wash systems",
      "Performance optimization",
    ],
    icon: "⚡",
    image: "/api/placeholder/600/400",
  },
  {
    id: "chemicals",
    title: "Chemical Supply",
    description: "Premium car wash chemicals and detailing products for superior results",
    features: [
      "High-quality cleaning solutions",
      "Eco-friendly product options",
      "Bulk chemical supply programs",
      "Product training and support",
      "Custom formulations available",
    ],
    icon: "🧪",
    image: "/api/placeholder/600/400",
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive car wash solutions tailored to your business needs. 
              From initial construction to ongoing maintenance and supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{service.icon}</span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg leading-8 text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-yellow-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 transition-all duration-200 hover-scale"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-yellow">
                    <div className="h-full w-full bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center">
                      <span className="text-8xl opacity-50">{service.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
              Contact us today for a free consultation and quote. Our experts are ready to help you with any car wash project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-all duration-200 hover-scale"
              >
                Get Free Quote
              </Link>
              <Link
                href="/projects"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors duration-200"
              >
                View Our Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
