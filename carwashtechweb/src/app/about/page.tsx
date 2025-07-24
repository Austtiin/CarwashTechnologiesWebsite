import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-yellow-600">
      <h1 className="text-4xl font-bold mb-4">About Carwash Technologies</h1>
      <p className="text-lg mb-6">
        At Carwash Technologies, we are dedicated to providing top-notch car wash services that leave your vehicle looking brand new. Our state-of-the-art technology and eco-friendly products ensure a thorough clean while being gentle on the environment.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to deliver exceptional car wash experiences that exceed our customers' expectations. We strive to innovate and improve our services continuously.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="text-lg mb-4">For inquiries, please call us at <strong>612-408-9010</strong>.</p>
      <p className="text-lg">We look forward to serving you!</p>
    </div>
  );
};

export default AboutPage;