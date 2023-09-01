import React from 'react';

const About = () => {
  return (
    <div name='about' className='mt-12 w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='text-center sm:text-right'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 pb-4'>
              About Me
            </p>
          </div>
          <div className='text-center sm:text-left'>
            <p className='text-2xl font-bold mb-4'>Hi, I'm Joseph Birara. Welcome to my portfolio!</p>
            <p>
              I am a passionate full-stack developer dedicated to crafting exceptional software that enhances the lives of those around me. With expertise in building solutions for a diverse range of clients, from individuals and small businesses to large enterprises, I am committed to delivering high-quality software that makes a difference.
            </p>
            <p>
              Every project I work on is an opportunity to create innovative and impactful solutions. I thrive on challenges and collaborate with my clients to turn their ideas into reality. Whether it's designing a user-friendly interface, optimizing database performance, or developing robust backend systems, I take pride in every aspect of the development process.
            </p>
            <p>
              My goal is to provide you with a software expert who is dedicated to your success. Together, we can turn your visions into functional and elegant software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
