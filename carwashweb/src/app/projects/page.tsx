import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Sunshine Express Car Wash",
    location: "Miami, FL",
    type: "New Construction",
    description: "Modern tunnel car wash with automated systems and eco-friendly features.",
    features: ["60-foot tunnel", "Reclaim system", "LED lighting", "Mobile app integration"],
    completion: "2024",
    image: "/api/placeholder/800/600",
  },
  {
    id: 2,
    title: "Quick Clean Auto Spa",
    location: "Dallas, TX",
    type: "Renovation & Upgrade",
    description: "Complete renovation of existing facility with new equipment and modern design.",
    features: ["Equipment upgrade", "New chemical systems", "Enhanced lighting", "Customer lounge"],
    completion: "2024",
    image: "/api/placeholder/800/600",
  },
  {
    id: 3,
    title: "Premium Wash Station",
    location: "Phoenix, AZ",
    type: "Full Service Build",
    description: "High-end car wash facility with detailing services and premium amenities.",
    features: ["Luxury finishes", "Detail center", "Customer wifi", "Premium chemicals"],
    completion: "2023",
    image: "/api/placeholder/800/600",
  },
  {
    id: 4,
    title: "EcoWash Green Solutions",
    location: "Portland, OR",
    type: "Eco-Friendly Build",
    description: "Environmentally conscious car wash with water recycling and solar power.",
    features: ["Solar panels", "Water recycling", "Biodegradable chemicals", "LEED certified"],
    completion: "2023",
    image: "/api/placeholder/800/600",
  },
  {
    id: 5,
    title: "City Center Car Care",
    location: "Chicago, IL",
    type: "Urban Design",
    description: "Compact urban car wash designed for high-traffic city environment.",
    features: ["Space optimization", "Quick service", "Urban design", "Traffic management"],
    completion: "2023",
    image: "/api/placeholder/800/600",
  },
  {
    id: 6,
    title: "Highway Express Wash",
    location: "Atlanta, GA",
    type: "High-Volume Facility",
    description: "Large-scale car wash designed for high-volume traffic and efficiency.",
    features: ["Dual lanes", "Express service", "Large capacity", "Advanced automation"],
    completion: "2022",
    image: "/api/placeholder/800/600",
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-40 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our portfolio of successful car wash projects across the country. 
              From new construction to renovations, see how we bring car wash visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-400 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-800">Projects Completed</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                50+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-800">States Served</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                25+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-800">Square Footage Built</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                500K+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-800">Years Experience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                10+
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col items-start hover-scale bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl opacity-50">🚗</span>
                    <p className="text-sm text-gray-600 mt-2">Project Image</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <span className="text-gray-500">{project.completion}</span>
                    <span className="relative z-10 rounded-full bg-yellow-100 px-3 py-1.5 font-medium text-yellow-800">
                      {project.type}
                    </span>
                  </div>
                  <div className="group relative flex-1">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{project.location}</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-500"
                    >
                      Learn More
                      <svg
                        className="ml-1 h-4 w-4"
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join the growing list of successful car wash owners who trust Carwash Technologies. 
              Let&apos;s discuss your vision and make it a reality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 transition-all duration-200 hover-scale"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-yellow-600 transition-colors duration-200"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
