import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

function NaveBar() {
    const [nav, setNav] = useState(false)
    const clickHandl = () => setNav(!nav)

    return (
        <div className='fixed w-screen flex h-[80px] justify-between items-center px-4 bg-[#08192f]'>

            {/* Desktop menu */}
            <ul className="hidden md:flex list-none">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contacts</li>
            </ul>

            {/* Mobile menu icon */}
            <div className='md:hidden z-10' onClick={clickHandl}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 h-screen w-full flex justify-center items-center list-none flex-col bg-[#08192f]"}>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Contacts</li>
            </ul>

            {/* Mobile close icon */}


            {/* Social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='py-2'><a><FaFacebook /></a></li>
                    <li className='py-2'><a><FaGithub /></a></li>
                    <li className='py-2'><a><FaLinkedin /></a></li>
                </ul>

            </div>

        </div>
    )
}

export default NaveBar
