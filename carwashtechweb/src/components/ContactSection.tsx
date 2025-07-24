import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-white text-yellow-600 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">For inquiries, please call us at:</p>
      <p className="text-lg font-semibold">612-408-9010</p>
      <a
        href="/contact"
        className="mt-4 inline-block bg-yellow-500 text-white font-medium py-2 px-4 rounded hover:bg-yellow-600 transition"
      >
        Contact Us
      </a>
    </div>
  );
};

export default ContactSection;