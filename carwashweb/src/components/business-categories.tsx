export default function BusinessCategories() {
  const categories = [
    {
      title: "Car Wash Construction",
      description: "Complete design and construction services for modern car wash facilities.",
      icon: "🏗️",
      features: ["Custom Design", "Permit Assistance", "Quality Construction"]
    },
    {
      title: "Maintenance & Repairs",
      description: "Expert maintenance and repair services to keep your car wash running smoothly.",
      icon: "🔧",
      features: ["24/7 Support", "Preventive Care", "Emergency Repairs"]
    },
    {
      title: "Premium Chemicals",
      description: "High-quality car wash chemicals and detailing products for superior results.",
      icon: "🧪",
      features: ["Eco-Friendly", "Bulk Supply", "Custom Formulas"]
    },
    {
      title: "Equipment Upgrades",
      description: "Modernize your car wash with the latest technology and equipment upgrades.",
      icon: "⚡",
      features: ["Latest Technology", "Energy Efficient", "ROI Focused"]
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-yellow-600 mb-4">Complete Solutions</h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Everything you need for car wash success
          </p>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive services from initial design and construction to ongoing maintenance and chemical supply.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-xl mb-6 group-hover:bg-yellow-100 transition-colors">
                <span className="text-3xl">{category.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <svg className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-200 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
