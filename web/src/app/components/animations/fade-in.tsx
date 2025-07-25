import React from 'react';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="transition-opacity duration-500 ease-in opacity-0 animate-fadeIn">
      {children}
    </div>
  );
};

export default FadeIn;