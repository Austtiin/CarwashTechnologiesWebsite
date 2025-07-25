import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Carwash Technologies</h1>
      <p className="text-lg mb-4">
        At Carwash Technologies, our mission is to provide top-notch vehicle wash solutions and exceptional service to our customers. We believe in delivering quality and innovation in every aspect of our business.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="text-lg mb-4">
        We envision a future where every vehicle is treated with the utmost care and attention, ensuring a clean and polished finish that reflects our commitment to excellence.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
        <li>Customer Focus: Our customers are at the heart of everything we do.</li>
        <li>Innovation: We continuously seek new ways to improve our services and products.</li>
        <li>Teamwork: We believe in the power of collaboration and support among our team members.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Serving the Midwest</h2>
      <p className="text-lg mb-4">
        Carwash Technologies proudly serves the Minnesota, North Dakota, South Dakota, and Wisconsin markets, providing tailored solutions to meet the unique needs of our customers in these regions.
      </p>
    </div>
  );
};

export default AboutPage;