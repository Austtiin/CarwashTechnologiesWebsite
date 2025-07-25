import Link from "next/link";

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    description: "20+ years in car wash industry, former engineering consultant",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Sarah Johnson",
    role: "VP of Operations",
    description: "Operations expert with extensive project management experience",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Mike Rodriguez",
    role: "Chief Engineer",
    description: "Mechanical engineer specializing in car wash system design",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Lisa Chen",
    role: "Chemical Specialist",
    description: "Chemistry PhD with expertise in cleaning formulations",
    image: "/api/placeholder/300/300",
  },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality, from design to delivery",
    icon: "🏆",
  },
  {
    title: "Innovation",
    description: "Continuously improving with the latest technology and methods",
    icon: "💡",
  },
  {
    title: "Sustainability",
    description: "Environmentally responsible solutions for the future",
    icon: "🌱",
  },
  {
    title: "Partnership",
    description: "Building long-term relationships with our clients",
    icon: "🤝",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started with a vision to revolutionize car wash construction",
  },
  {
    year: "2012",
    title: "First Major Project",
    description: "Completed our first multi-million dollar car wash facility",
  },
  {
    year: "2015",
    title: "Chemical Division Launch",
    description: "Expanded into premium car wash chemicals and supplies",
  },
  {
    year: "2018",
    title: "National Expansion",
    description: "Opened operations in 15+ states across the country",
  },
  {
    year: "2020",
    title: "Eco-Friendly Initiative",
    description: "Launched comprehensive green car wash solutions",
  },
  {
    year: "2024",
    title: "50+ Projects Completed",
    description: "Milestone achievement serving hundreds of satisfied clients",
  },
];

export default function About() {
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
              About <span className="text-gradient">Carwash Technologies</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              For over a decade, we&apos;ve been the trusted partner for car wash owners nationwide, 
              providing comprehensive solutions from construction to chemicals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Mission
            </h2>
            <p className="text-xl leading-8 text-gray-600 mb-8">
              To empower car wash businesses with innovative solutions, superior products, and exceptional service 
              that drive success and sustainability in the automotive care industry.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
              {values.map((value) => (
                <div key={value.title} className="text-center hover-scale bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded in 2010 by industry veterans who saw the need for a comprehensive car wash solutions provider, 
                  Carwash Technologies has grown from a small construction company to a full-service partner for car wash businesses nationwide.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  What started as a passion for quality construction has evolved into a complete ecosystem of services, 
                  including design, construction, maintenance, equipment upgrades, and premium chemical supply.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today, we&apos;re proud to have completed over 50 successful projects and serve hundreds of satisfied customers 
                  across 25+ states, always maintaining our commitment to quality, innovation, and customer success.
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center shadow-yellow">
                  <div className="text-center">
                    <span className="text-8xl opacity-50">🏢</span>
                    <p className="text-lg text-gray-600 mt-4">Our Headquarters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-yellow-400 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Key milestones in our growth and commitment to the car wash industry
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover-scale">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Industry experts dedicated to your car wash success
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center hover-scale">
                <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center mb-6">
                  <span className="text-6xl opacity-50">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certifications & Recognition
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover-scale h-32 flex items-center justify-center">
                <span className="text-4xl">🏅</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Industry Excellence Award</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover-scale h-32 flex items-center justify-center">
                <span className="text-4xl">🌟</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Quality Certification</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover-scale h-32 flex items-center justify-center">
                <span className="text-4xl">🌱</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Green Business Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover-scale h-32 flex items-center justify-center">
                <span className="text-4xl">🛡️</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Safety Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join the growing family of successful car wash owners who trust Carwash Technologies 
              for their business needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 transition-all duration-200 hover-scale"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-yellow-600 transition-colors duration-200"
              >
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
