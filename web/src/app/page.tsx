'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const animationIdRef = React.useRef<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      // Animation logic (currently not using time)
      animationIdRef.current = requestAnimationFrame(updateTime);
    };

    animationIdRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Carwash Technologies</title>
        <meta name="description" content="Carwash Technologies - Industry leading carwash solutions." />
      </Head>

      <div className="min-h-screen relative">
        {/* ...Aurora and hero section... */}
        <section className="relative z-10 bg-gradient-to-br from-white/100 via-white/30 to-white/50 text-white py-16 min-h-[70vh] flex items-center">
          {/* ...other hero content... */}
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* ...text content... */}
              <div className="fade-in-up flex justify-center">
                <div className="flex items-center justify-center w-[350px] h-[350px] bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={320}
                    height={320}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ...wave transition... */}
        </section>

        {/* ...other sections... */}

        {/* Chemicals Section */}
        <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
          {/* ...background... */}
          <div className="container mx-auto px-4 relative z-10 pt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* ...text... */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="w-30 h-30 flex items-center justify-center mx-auto mb-5">
                    <div className="mx-auto flex items-center justify-center p-1 gap-6">
                      <Image src="/logoSimo.webp" alt="Chemical Icon" width={60} height={60} />
                      <Image src="/logoCWT.webp" alt="Chemical Icon" width={60} height={60} />
                      <Image src="/logoVertech.webp" alt="Chemical Icon" width={60} height={60} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Guarantee</h3>
                  <p className="text-gray-600">
                    All of our chemicals meet the highest industry standards for performance and environmental safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ...rest unchanged... */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}
