import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      {icon && <img src={icon} alt={title} className="w-24 h-24 mx-auto mb-4" />}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
