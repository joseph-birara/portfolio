import React from 'react';
import { services } from "../Data/Data.js";
import ServiceCard from './ServiceCard'; 

const Services = () => {
  const servicesData = services; 

  return (
    <div name='service' className='w-full bg-[#0a192f] text-gray-300 p-8'>
      <div className="max-w-[1000px] mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through your services data and create ServiceCard components */}
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon} // You can pass an icon (e.g., a React component or an image)
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
