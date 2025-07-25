import React from 'react';

const ChemicalsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Chemical Products</h2>
        <p className="text-gray-600 mb-4">
          At Carwash Technologies, we offer a range of high-quality chemical products designed to enhance the car washing experience. Our chemicals are formulated to provide superior cleaning, protection, and shine for vehicles.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Foaming Cleaners</li>
          <li>Wax and Sealants</li>
          <li>Wheel and Tire Cleaners</li>
          <li>Glass Cleaners</li>
          <li>Detailing Sprays</li>
        </ul>
        <p className="mt-4">
          Our products are suitable for use in various car wash systems and are available for purchase in bulk. We are committed to providing environmentally friendly options that meet the needs of our customers in Minnesota, North Dakota, South Dakota, and Wisconsin.
        </p>
      </div>
    </section>
  );
};

export default ChemicalsSection;