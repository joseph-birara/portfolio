import React, { useState } from 'react';

import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function NaveBar() {
  const [nav, setNav] = useState(true);
  const clickHandl = () => setNav(!nav);

  return (
    <div className='fixed w-screen flex h-[65px] justify-between items-center px-4 pt-5 bg-[#4f5864] shadow-lg z-50'>

      {/* Desktop menu */}
      <ul className={`hidden md:flex space-x-4 text-white list-none absolute top-2 right-4 z-30 pt-3`}>
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
     
    </div>
  );
}

export default NaveBar;
