import React from 'react';

const PortfolioCard = ({ title, description, imageUrl, liveLink, githubLink }) => {
  return (
    <div className="bg-white w-72 backdrop:rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative group">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-60 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-100 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
