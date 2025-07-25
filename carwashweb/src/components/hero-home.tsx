import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto container-padding w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              🚗 Minnesota's Premier Car Wash Solutions
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6">
            Professional{" "}
            <span className="text-yellow-500">Car Wash</span>{" "}
            Solutions
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 text-balance mb-8">
            From construction to chemicals, we provide complete solutions for modern car wash businesses. 
            Expert design, reliable maintenance, and premium products to ensure your success.
          </p>
          
          {/* Location Info */}
          <p className="text-gray-500 text-balance mb-12">
            Proudly serving Minnesota, North Dakota, South Dakota and Wisconsin with over 10 years of expertise.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">50+</div>
              <div className="text-sm text-gray-600 mt-2">Car Washes Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">200+</div>
              <div className="text-sm text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">10+</div>
              <div className="text-sm text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">24/7</div>
              <div className="text-sm text-gray-600 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}