import React from 'react';
import profileImage from '../Assets/coding-.png'; // Import your profile image here

const About = () => {
  return (
    <section id='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center'>
      <div className='mx-auto p-8 max-w-5xl'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 pb-4'>
            About Me
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8'>
          <div className='flex justify-center items-center sm:justify-end'>
            {/* Include your profile image here */}
            <img src={profileImage} alt='Profile' className='w-80 h-auto rounded-full mb-4 sm:mb-0' />
          </div>
          <div className='text-center sm:text-left'>
            <p className='text-2xl font-bold mb-5'>Experienced Full-Stack Developer</p>
            <p>
              With extensive experience in full-stack development, including Flutter, I'm Joseph Birara, dedicated to delivering high-quality software solutions that make a difference.
            </p>
            <p className='my-5'>
              My expertise lies in building robust backend systems, optimizing database performance, and crafting scalable web applications. I thrive on challenges and excel at turning ideas into functional and elegant solutions.
            </p>
            <p>
              My commitment is to provide you with a dedicated partner in your software journey, transforming your visions into reality through code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
