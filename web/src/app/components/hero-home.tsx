// src/components/hero-home.tsx
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        
        {/* Main Heading */}
        <h1>
          Professional <span style={{color: '#f59e0b'}}>Car Wash</span> Solutions
        </h1>
        
        {/* Description */}
        <p className="mt-6 mx-auto max-w-2xl text-balance">
          From construction to chemicals, we provide complete solutions for modern car wash businesses. Expert design, reliable maintenance, and premium products to ensure your success.
        </p>
        
        {/* Location Info */}
        <p className="mt-4 text-sm text-gray-500">
          Proudly serving Minnesota, North Dakota, South Dakota and Wisconsin.
        </p>

        {/* Action Button */}
        <div className="mt-10">
          <Link href="/contact" className="btn-primary">
            Get Your Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}