import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">For inquiries, please reach out to us:</p>
      <p className="text-xl font-semibold mb-4">Phone: 612-408-9010</p>
      <a
        href="mailto:info@carwashtechnologies.com"
        className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
      >
        Contact Us
      </a>
      <footer className="mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} Carwash Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;