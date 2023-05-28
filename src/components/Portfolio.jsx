import React from 'react'
import Button from './button'
import projectDetails from '../project_info/projectDetails'


function Portfolio() {

    


  return (
    <div name="portfolio" className='w-full bg-gradient-to-b
    from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto'>
        <div className='pb-12'>
            <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Portfolio</p>
        </div>
            {projectDetails.map(({id,name,src,codeWebsite,demoSite,description}) => (
                <div key={id} className='flex flex-col justify-center items-center
                mx-auto md:flex-row h-[90vh] md:h-[75vh]'>
                    <div className='px-10 md:px-3 md:w-1/2'>
                        <img className='rounded-md' src={src} alt='arrayDestruct' />
                    </div>
                    <div className='flex flex-col justify-center items-center
                     px-10 py-8 md:px-5 md:ml-5 md:py-0 md:w-1/2'>
                        <div className='pb-5'>
                            <p className='text-3xl text-cyan-500 font-semibold'>{name}</p>
                        </div>
                        <div  className='pb-5 text-center'>
                            <p className='tracking-wide'>{description}</p>
                        </div>
                        <div className='w-full cursor-pointer flex flex-row justify-around'>
                            <Button link={demoSite} fun="Demo"/>
                            <Button link={codeWebsite} fun="Code"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio