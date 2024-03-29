import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='ml-4 mt-5 md:ml-16 w-full h-screen bg-[#0a192f] flex flex-col md:flex-row items-center'>

      {/* Text (on the left for larger screens, below for smaller screens) */}
      <div className='md:w-1/2 flex flex-col justify-center text-center md:text-left px-8 order-2 md:order-1'>
        <p className='text-pink-600 text-lg sm:text-xl'>
          Hi there! I'mk
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Joseph Birara
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
          Passionate about crafting digital solutions that leave an impact. With expertise in both frontend and backend development, I strive to create seamless and responsive web applications that elevate user experiences. I have hands-on experience in MERN Stack and Flutter development.
        </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Over the years, I've tackled various challenging projects, honing my skills across different technologies. My ability to adapt and excel in diverse environments has earned me a reputation for reliability. Let's collaborate to bring your digital ideas to life.
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-start mt-5 px-8">
  <button className='bg-[#64ffda] text-lg px-6 py-3 rounded-3xl shadow-md mr-3 hover:bg-[#ccd6f6]'>
    Hire Me
  </button>
  <div className='flex gap-3'>
    <a href='https://github.com/joseph-birara' title='GitHub' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='py-3 px-4 inline-block rounded-full bg-white hover:shadow-md'>
      <FaGithub className="text-[#FF5733] text-xl" />
    </a>
  </div>
  <div className='flex gap-3'>
    <a href='https://www.linkedin.com/in/joseph-birara/' title='LinkedIn' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='py-3 px-4 inline-block rounded-full bg-white hover:shadow-md'>
      <FaLinkedin className="text-[#0077B5] text-xl" />
    </a>
  </div>
  <div className='flex gap-3'>
    <a href='#' title='Upwork' target='_blank' rel='noopener noreferrer' aria-label='Upwork' className='py-3 px-4 inline-block rounded-full bg-white hover:shadow-md'>
      <SiUpwork className="text-[#6FDC7F] text-xl" />
    </a>
  </div>
</div>


      </div>
    </div>
  );
};

export default Home;
