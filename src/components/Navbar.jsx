import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },

    ]


  return (
    <div className='flex justify-between items-center w-full h-[4rem]
    px-4 bg-black text-white fixed'>
        <div>
            <p className='text-4xl font-signature ml-2' >Ankit</p>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                   <li className='px-4 capitalize font-medium 
                   cursor-pointer text-gray-500 hover:scale-105 
                   duration-200' key={id}>
                       <Link to={link} smooth duration="500">{link}</Link>
                   </li> 
            ))}
        </ul>
        
        <div onClick={() => setNav(!nav)} className='cursor-pointer
        text-gray-500 flex md:hidden z-10'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>

        {nav && 
            <ul className='flex flex-col justify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b
            from-black to-gray-800'>
                {links.map(({link}) => (
                   <li className='px-4 py-4 capitalize text-4xl cursor-pointer' key={link.id}>
                      <Link onClick={() => setNav(!nav)} to={link} smooth duration="500">{link}</Link>
                   </li> 
                ))}
            </ul>
        }

    </div>
  )
}

export default Navbar