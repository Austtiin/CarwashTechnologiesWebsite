import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6" data-aos="fade-up">
            Ready to build your car wash business?
          </h2>
          
          <p className="text-xl leading-8 text-gray-800 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
            Get in touch with our experts today for a free consultation and quote. 
            We&apos;ll help you design and build the perfect car wash solution for your needs.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="400">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[220px]"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center text-lg font-semibold text-gray-900 hover:text-gray-800 transition-colors duration-200 gap-2 px-6 py-4 border-2 border-gray-900/20 rounded-2xl hover:border-gray-900/40"
            >
              View Our Portfolio
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center" data-aos="fade-up" data-aos-delay="600">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3">
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Call Us</div>
              <div className="text-gray-800">(555) 123-WASH</div>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3">
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Email Us</div>
              <div className="text-gray-800">info@carwashtech.com</div>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3">
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Visit Us</div>
              <div className="text-gray-800">Nationwide Service</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80" data-aos="fade-up" data-aos-delay="800">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
