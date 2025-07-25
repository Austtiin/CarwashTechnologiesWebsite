import Link from "next/link";

const chemicalCategories = [
  {
    id: "cleaning",
    title: "Cleaning Solutions",
    description: "High-performance cleaning chemicals for superior wash results",
    products: [
      {
        name: "Premium Presoak",
        description: "Advanced presoak formula for tough dirt and grime removal",
        features: ["Biodegradable", "High concentration", "pH balanced"],
      },
      {
        name: "Foam Shampoo",
        description: "Rich, luxurious foam for gentle yet effective cleaning",
        features: ["High lubricity", "Streak-free finish", "Pleasant fragrance"],
      },
      {
        name: "Spot-Free Rinse",
        description: "Advanced rinse aid for perfect spot-free drying",
        features: ["No water spots", "Quick drying", "Protective coating"],
      },
    ],
    icon: "🧽",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "protection",
    title: "Protection & Wax",
    description: "Premium protection products for lasting shine and protection",
    products: [
      {
        name: "Carnauba Wax",
        description: "Natural carnauba wax for deep shine and protection",
        features: ["Natural ingredients", "Long-lasting shine", "UV protection"],
      },
      {
        name: "Ceramic Coating",
        description: "Advanced ceramic protection for ultimate durability",
        features: ["9H hardness", "Hydrophobic finish", "Chemical resistance"],
      },
      {
        name: "Paint Sealant",
        description: "Synthetic sealant for enhanced gloss and protection",
        features: ["6-month protection", "Easy application", "All-weather formula"],
      },
    ],
    icon: "✨",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "specialty",
    title: "Specialty Products",
    description: "Specialized solutions for unique car wash needs",
    products: [
      {
        name: "Wheel Cleaner",
        description: "Powerful wheel and rim cleaning solution",
        features: ["Safe on all wheels", "Brake dust removal", "Non-acidic formula"],
      },
      {
        name: "Bug & Tar Remover",
        description: "Effective removal of stubborn contaminants",
        features: ["Fast acting", "Safe on paint", "Concentrated formula"],
      },
      {
        name: "Interior Cleaner",
        description: "Multi-surface interior cleaning solution",
        features: ["All surfaces", "Anti-static", "UV protection"],
      },
    ],
    icon: "🔬",
    color: "from-green-400 to-green-600",
  },
  {
    id: "eco",
    title: "Eco-Friendly Line",
    description: "Environmentally responsible cleaning solutions",
    products: [
      {
        name: "Bio Wash",
        description: "100% biodegradable car wash shampoo",
        features: ["Plant-based", "Phosphate-free", "Greywater safe"],
      },
      {
        name: "Green Presoak",
        description: "Eco-friendly presoak for environmental compliance",
        features: ["VOC compliant", "Biodegradable", "Non-toxic"],
      },
      {
        name: "Natural Wax",
        description: "Plant-based wax alternative",
        features: ["Renewable sources", "Biodegradable", "Effective protection"],
      },
    ],
    icon: "🌱",
    color: "from-emerald-400 to-emerald-600",
  },
];

const benefits = [
  {
    title: "Premium Quality",
    description: "Highest quality formulations for superior results",
    icon: "🏆",
  },
  {
    title: "Eco-Friendly Options",
    description: "Environmentally responsible solutions available",
    icon: "🌍",
  },
  {
    title: "Technical Support",
    description: "Expert guidance on product selection and usage",
    icon: "👨‍🔬",
  },
  {
    title: "Bulk Pricing",
    description: "Competitive pricing for high-volume customers",
    icon: "💰",
  },
];

export default function Chemicals() {
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
              Premium Car Wash <span className="text-gradient">Chemicals</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional-grade car wash chemicals and detailing products. 
              From basic cleaning to premium protection, we have everything you need for exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">Why Choose Our Chemicals</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The difference is in the formula
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center hover-scale bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Chemical Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive range of car wash chemicals covers every aspect of vehicle cleaning and protection.
            </p>
          </div>

          <div className="space-y-20">
            {chemicalCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-xl opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {category.products.map((product) => (
                      <div key={product.name} className="border border-gray-200 rounded-lg p-6 hover-scale">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <ul className="space-y-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-600">
                              <svg
                                className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0"
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
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="bg-yellow-400 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Flexible Supply Programs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              We offer flexible chemical supply programs tailored to your business needs and volume requirements.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter Package</h3>
              <p className="text-gray-600 mb-6">Perfect for new car wash operations</p>
              <ul className="text-left space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Basic chemical set
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Training included
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Competitive pricing
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 text-center text-white shadow-sm border-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-4">Premium Program</h3>
              <p className="text-gray-300 mb-6">Complete solution for established operations</p>
              <ul className="text-left space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Full product line
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Volume discounts
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Custom formulations
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">Custom solutions for large operations</p>
              <ul className="text-left space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Bulk pricing
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  Custom logistics
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to upgrade your chemicals?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Contact our chemical experts today to discuss your needs and find the perfect solution for your car wash operation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 transition-all duration-200 hover-scale"
              >
                Get Chemical Quote
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-yellow-600 transition-colors duration-200"
              >
                View All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
