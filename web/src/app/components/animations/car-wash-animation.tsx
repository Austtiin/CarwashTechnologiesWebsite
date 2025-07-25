import React from 'react';

const CarWashAnimation = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 bg-blue-500 animate-suds"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="car-animation">
          <div className="car"></div>
        </div>
      </div>
      <style jsx>{`
        .car-animation {
          position: relative;
          animation: moveCar 5s linear infinite;
        }

        .car {
          width: 100px;
          height: 50px;
          background-color: red;
          border-radius: 10px;
          position: absolute;
          bottom: 20px;
        }

        @keyframes moveCar {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-suds {
          animation: suds 2s infinite;
        }

        @keyframes suds {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CarWashAnimation;