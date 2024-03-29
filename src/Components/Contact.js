import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className="max-w-screen-xl mx-auto">
        <form method='POST' action="https://getform.io/f/00ae38b8-6191-4c66-9635-537ab73dbe03" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - joseph.biraraa@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 mb-4' type="text" placeholder='Name' name='name' required />
<input className='bg-[#ccd6f6] p-2 mb-4' type="email" placeholder='Email' name='email' required />
<textarea className='bg-[#ccd6f6] p-2 mb-4' name="message" rows="10" placeholder='Message' required></textarea>

          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mb-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
