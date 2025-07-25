import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">We would love to hear from you! Please reach out with any questions or inquiries.</p>
      
      <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>Email:</strong> info@carwashtechnologies.com</li>
        <li><strong>Address:</strong> 123 Carwash Lane, Minneapolis, MN 55401</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Follow Us</h2>
      <p className="text-lg mb-2">Stay connected through our social media channels:</p>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://facebook.com/carwashtechnologies" className="text-blue-500">Facebook</a></li>
        <li><a href="https://twitter.com/carwashtech" className="text-blue-500">Twitter</a></li>
        <li><a href="https://instagram.com/carwashtechnologies" className="text-blue-500">Instagram</a></li>
      </ul>
    </div>
  );
};

export default ContactPage;