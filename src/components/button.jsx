import React from 'react'

function button({fun, link}) {
  return (
    <a
    href={link} 
    target='_blank'
    rel='noreferrer'
    className='group bg-gradient-to-r from-cyan-500
    to-blue-500 flex flex-row items-center justify-center
    w-fit py-3 px-5 h-[2.5rem] text-white rounded-md'>
        {fun}
    </a>
  )
}

export default button