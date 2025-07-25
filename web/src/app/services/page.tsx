import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-4">
        At Carwash Technologies, we offer a comprehensive range of services to meet all your vehicle care needs. Our expertise spans across various sectors, ensuring that we provide top-notch solutions tailored to your requirements.
      </p>
      
      <h2 className="text-3xl font-semibold mt-6">Vehicle Wash</h2>
      <p className="mb-4">
        Our vehicle wash services utilize the latest technology and eco-friendly products to ensure your vehicle is spotless and well-maintained.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Sales</h2>
      <p className="mb-4">
        We offer a wide range of car wash equipment and supplies for sale, ensuring you have access to the best products in the industry.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Service</h2>
      <p className="mb-4">
        Our dedicated service team is here to assist you with installation, maintenance, and repairs, ensuring your equipment operates at peak performance.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Consulting</h2>
      <p className="mb-4">
        We provide expert consulting services to help you optimize your car wash operations and maximize efficiency.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Service Areas</h2>
      <p className="mb-4">
        We proudly serve the Minnesota, North Dakota, South Dakota, and Wisconsin markets, bringing our expertise to your doorstep.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Contact Us</h2>
      <p className="mb-4">
        For more information about our services, please reach out to us at:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Phone: (123) 456-7890</li>
        <li>Email: info@carwashtechnologies.com</li>
        <li>Address: 123 Carwash Lane, Minneapolis, MN 55401</li>
      </ul>
    </div>
  );
};

export default ServicesPage;