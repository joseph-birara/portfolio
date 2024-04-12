import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div w-64 h-40 relative overflow-hidden"
    >
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 transition duration-300 ease-in-out flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-white tracking-wider mb-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          {project.name}
        </h3>
        <div className="pt-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-base">
              Code
            </button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-base">
              Live
            </button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectCard;
