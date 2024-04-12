import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Home = () => {
  return (
    <section id='home' className='ml-4 mt-5 md:ml-16 w-full h-screen bg-[#0a192f] flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 flex flex-col justify-center text-center md:text-left px-8 order-2 md:order-1'>
        <p className='text-pink-600 text-lg sm:text-xl'>
          I'm a 
        </p>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-white py-4 max-w-[700px] font-extrabold text-xl'>
          Hi there, I am Joseph Birara, a high-skilled Full Stack Developer experienced in React, Node.js, GoLang, web, and Flutter development.
        </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Over the years, I've tackled various challenging projects, honing my skills across different technologies. My ability to adapt and excel in diverse environments has earned me a reputation for reliability. Let's collaborate to bring your digital ideas to life.
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-start mt-5 px-8">
          <button onClick={() => { window.location.href = 'mailto:joseph.biraraa@gmail.com'; }} className='bg-[#64ffda] text-lg px-6 py-3 rounded-3xl shadow-md mr-3 hover:bg-[#ccd6f6]'>
            Hire Me
          </button>
          <div className='flex rounded-[50%] bg-white hover:shadow-md h-12 w-12 justify-center items-center'>
            <a href='https://github.com/joseph-birara' title='GitHub' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
              <FaGithub className="text-[#FF5733] text-3xl" alt="GitHub" />
            </a>
          </div>
          <div className='flex rounded-[50%] bg-white hover:shadow-md h-12 w-12 justify-center items-center'>
            <a href='https://www.linkedin.com/in/joseph-birara/' title='LinkedIn' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
              <FaLinkedin className="text-[#0077B5] text-3xl" alt="LinkedIn" />
            </a>
          </div>
          <div className='flex rounded-[50%] bg-white hover:shadow-md h-12 w-12 justify-center items-center'>
            <a href='https://www.upwork.com/freelancers/~01ddb101f7cb147b35?viewMode=1' title='Upwork' target='_blank' rel='noopener noreferrer' aria-label='Upwork'>
              <SiUpwork className="text-[#6FDC7F] text-3xl" alt="Upwork" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
