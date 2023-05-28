import React from 'react'
import myPic from "../assets/mypic2.gif"
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800'>
        <div className='flex flex-col justify-center items-center
        mx-auto max-w-screen-lg md:flex-row h-full px-4'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white
                font-bold'>
                    I'm <span className='text-cyan-500'>Ankit</span>.
                    <br/>
                    <p className='text-3xl'>Full Stack Developer</p>
                </h2>
                <p className='text-gray-500 py-5 max-w-md'>
                 With expertise in front-end and back-end technologies,
                  I combine creativity and technical skills to deliver 
                  innovative solutions that make a lasting impact.
                </p>
                <Link to='portfolio' smooth duration="500" className='group bg-gradient-to-r from-cyan-500
                to-blue-500 flex flex-row items-center justify-center
                w-fit py-3 px-5 my-2 text-white rounded-md'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
            <div className='md:w-1/2'>
                <img src={myPic} alt='myProfilepic'
                className='mx-auto w-2/3 md:w-[90%] rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Home