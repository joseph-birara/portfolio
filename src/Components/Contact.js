import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='contact' className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto flex flex-col items-center'>
        <h2 className='text-3xl font-semibold mb-8'>Contact Me</h2>
        {/* Horizontal buttons */}
        <div className='flex justify-center mb-6 space-x-6'>
          {/* Upwork */}
          <a href='https://www.upwork.com/freelancers/~01ddb101f7cb147b35?viewMode=1' target='_blank' rel='noopener noreferrer' className="text-current">
            <SiUpwork className='w-10 h-10 text-[#6FDC7F]' />
          </a>
          {/* LinkedIn */}
          <a href='https://www.linkedin.com/in/joseph-birara/' target='_blank' rel='noopener noreferrer' className="text-current">
            <FaLinkedin className='w-10 h-10 text-[#0077B5]' />
          </a>
          {/* Gmail */}
          <a href='mailto:joseph.biraraa@gmail.com' className="text-current">
            <FaEnvelope className='w-10 h-10 ' />
          </a>
          {/* GitHub */}
          <a href='https://github.com/joseph-birara' target='_blank' rel='noopener noreferrer' className="text-current">
            <FaGithub className='w-10 h-10 text-[#FF5733]' />
          </a>
        </div>
        {/* Contact details */}
        <div className='text-center flex justify-between gap-10 bg-gray-800 p-4 rounded-lg flex-wrap'>
  <div className='flex items-center'>
    <FaEnvelope className='inline mr-2' />
    <span className="text-white"><strong>Email:</strong></span> <span className="text-blue-500 ml-2">joseph.biraraa@gmail.com</span>
  </div>
  <div className='flex items-center'>
    <FaPhone className='inline mr-2' />
    <span className="text-white"><strong>Phone:</strong></span> <span className="text-yellow-500 ml-2">+251 0975455836</span>
  </div>
</div>


        {/* Additional text */}
        <p className="text-lg mt-8">
          Let’s chat, tell me about the project and the required services.
        </p>
      </div>
    </section>
  );
};

export default Contact;
