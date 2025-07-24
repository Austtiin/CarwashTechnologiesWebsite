import React from "react";

const Services = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">Our Services</h1>
      <ul className="list-disc list-inside">
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Full-Service Car Wash</h2>
          <p>Comprehensive cleaning inside and out, including waxing and detailing.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Express Wash</h2>
          <p>A quick wash for those on the go, focusing on exterior cleaning.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Interior Detailing</h2>
          <p>Thorough cleaning of the interior, including vacuuming and upholstery care.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Headlight Restoration</h2>
          <p>Improve visibility and appearance by restoring cloudy headlights.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">Ceramic Coating</h2>
          <p>Long-lasting protection for your vehicle's paint, enhancing shine and durability.</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;