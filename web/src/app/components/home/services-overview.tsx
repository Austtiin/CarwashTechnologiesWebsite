import React from 'react';

const ServicesOverview = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Carwash Technologies, we offer a comprehensive range of services tailored to meet the needs of our clients in Minnesota, North Dakota, South Dakota, and Wisconsin. Our expertise includes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Vehicle Wash: High-quality wash services that ensure your vehicle looks its best.</li>
          <li className="mb-2">Sales: Providing top-notch car wash equipment and supplies.</li>
          <li className="mb-2">Service: Reliable maintenance and support for all car wash systems.</li>
          <li className="mb-2">Consulting: Expert advice to optimize your car wash operations.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Our commitment to quality and customer satisfaction sets us apart in the industry. Contact us today to learn more about how we can help your business thrive!
        </p>
      </div>
    </section>
  );
};

export default ServicesOverview;