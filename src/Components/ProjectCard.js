import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font-bold text-white tracking-wider ">
          {project.name}
        </span>
        <div className="pt-8 text-center ">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
            >
              Code
            </button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
