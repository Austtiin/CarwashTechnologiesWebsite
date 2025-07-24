import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: 'Full-Service Car Wash',
      description: 'Comprehensive cleaning inside and out, including waxing and detailing.',
    },
    {
      title: 'Express Wash',
      description: 'Quick exterior wash for those on the go.',
    },
    {
      title: 'Interior Cleaning',
      description: 'Thorough vacuuming and cleaning of all interior surfaces.',
    },
    {
      title: 'Detailing Services',
      description: 'In-depth cleaning and restoration of your vehicle’s interior and exterior.',
    },
    {
      title: 'Headlight Restoration',
      description: 'Improve visibility and appearance with our headlight restoration service.',
    },
  ];

  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside">
        {servicesList.map((service, index) => (
          <li key={index} className="mb-2">
            <h3 className="font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;