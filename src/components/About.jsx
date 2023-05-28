import React from 'react'

function About() {
  return (
    <div 
    name="about"
    className='h-screen w-full bg-gradient-to-b from-gray-800 
    to-black text-white'>
        <div className='max-w-screen-lg p-4 m-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    About
                </p>
            </div>
            <p className='mt-20 text-xl'>
            I'm a passionate full stack developer specializing 
            in creating impactful digital solutions. With expertise 
            in both front-end and back-end technologies, I strive to
             deliver seamless user experiences and robust 
             functionality.
            </p>
            <br/>
            <p className='text-xl'>
            Proficient in HTML, CSS, JavaScript, and various
             frameworks such as React and Node.js
            , I possess a versatile skill set that spans the
             entire development stack. From designing 
             captivating user interfaces to architecting 
             scalable server-side systems, I have the 
             know-how to tackle diverse challenges.
            </p>
        </div>
    </div>
  )
}

export default About