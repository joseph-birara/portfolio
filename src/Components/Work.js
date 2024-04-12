import React from 'react';
import { data } from "../Data/Data.js";
import PortfolioCard from './PortifolioCard.js';

const Work = () => {
  const projects = data;

  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
      <div className="max-w-[1000px] mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Some of my Projects</h1>
        <div className="flex gap-8 flex-wrap">
          {projects.map((pro, index) => (
            <div key={index}>
              <PortfolioCard
                title={pro.name}
                description={pro.descriptio}
                imageUrl={pro.image}
                projectLink={pro.live}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
