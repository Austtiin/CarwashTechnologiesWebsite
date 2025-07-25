import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a href={link} className="btn-primary inline-block">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;