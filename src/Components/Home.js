import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import CoverImage from '../Assets/Projects/cover.jpg';

const Home = () => {
  return (
    <div name='home' className='ml-4 md:ml-16 w-full h-screen bg-[#0a192f] flex flex-col md:flex-row items-center'>
      {/* Image (on the right for larger screens, above for smaller screens) */}
      <div className='md:w-1/2 order-1 md:order-2'>
        <img
          src={CoverImage}
          alt='Joseph Birara'
          className='w-full max-w-[400px] mx-auto md:mx-0 md:mr-12 rounded-full'
        />
      </div>

      {/* Text (on the left for larger screens, below for smaller screens) */}
      <div className='md:w-1/2 flex flex-col justify-center text-center md:text-left px-8 order-2 md:order-1'>
        <p className='text-pink-600 text-lg sm:text-xl'>
          Hi, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Joseph Birara
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
        </p>
        <div>
        <a href='#work' aria-label='View Work'>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 sm:hidden md:inline-block'>
      View Work
      <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
      </span>
    </button>
  </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
