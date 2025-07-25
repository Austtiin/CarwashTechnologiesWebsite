export default function FeaturesPlanet() {
  const features = [
    {
      title: "Expert Design",
      description: "Our team of experts will design a car wash facility that maximizes efficiency and profitability.",
      icon: "🎯"
    },
    {
      title: "Quality Construction",
      description: "We use only the highest quality materials and construction techniques for lasting durability.",
      icon: "🏆"
    },
    {
      title: "Ongoing Support",
      description: "24/7 support and maintenance services to keep your car wash running at peak performance.",
      icon: "🛠️"
    },
    {
      title: "Cost Effective",
      description: "Our solutions are designed to maximize your ROI with efficient operations and low maintenance costs.",
      icon: "💰"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div data-aos="fade-right">
            <h2 className="text-base font-semibold leading-7 text-yellow-600 mb-4">
              Why Choose Us
            </h2>
            <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Built for success from day one.
            </p>
            <p className="text-xl leading-8 text-gray-600 mb-12">
              With over 50 years of combined experience in the car wash industry, we understand what it takes to build
              and maintain a successful operation. Our comprehensive approach ensures every detail is perfect.
            </p>

            {/* Features list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative" data-aos="fade-left">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Central circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center">
                <div className="bg-white rounded-full w-3/4 h-3/4 flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
                    <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🧪</span>
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
