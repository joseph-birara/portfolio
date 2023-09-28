import React, { useState } from 'react';

import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function NaveBar() {
  const [nav, setNav] = useState(true);
  const clickHandl = () => setNav(!nav);

  return (
    <div className='fixed w-screen flex h-[80px] justify-between items-center px-4 bg-[#08192f] shadow-lg'>

      {/* Desktop menu */}
      <ul className={`hidden md:flex space-x-4 text-white list-none absolute top-2 right-4 z-30`}>
        <li>
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500} className="hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="hover:text-blue-500">
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className="hover:text-blue-500">
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu icon */}
      <div className='md:hidden z-10' onClick={clickHandl}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={`absolute top-0 left-0 h-screen w-full flex justify-center items-center list-none flex-col bg-[#08192f] ${!nav ? 'hidden' : 'md:hidden'}`}>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="skills" smooth={true} duration={500} className="hover:text-blue-500">
            Skills
          </Link>
        </li>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="about" smooth={true} duration={500} className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="service" smooth={true} duration={500} className="hover:text-blue-500">
            Services
          </Link>
        </li>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="work" smooth={true} duration={500} className="hover:text-blue-500">
            Work
          </Link>
        </li>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="home" smooth={true} duration={500} className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li className='py-2 text-xl'>
          <Link onClick={clickHandl} to="contact" smooth={true} duration={500} className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul className='hidden md:block'>
          <li className='py-2'>
            <a href='https://github.com/joseph-birara' title='GitHub'>
              <FaGithub />
            </a>
          </li>
          <li className='py-2'>
            <a href='https://www.linkedin.com/in/joseph-birara/' title='LinkedIn'>
              <FaLinkedin />
            </a>
          </li>
          <li className='py-2'>
            <a href='#' title='Facebook'>
              <FaFacebook />
            </a>
          </li>
          <li className='py-2'>
            <a href='https://drive.google.com/file/d/1Vr14m_2C5vYc0i5Le38p_pgY0wynm71_/view?usp=sharing' title='Resume'>
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NaveBar;
