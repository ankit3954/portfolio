import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {HiOutlineDocument} from "react-icons/hi"

function SocialLinksPC() {

    const links = [
        {
            id:1,
            child:(
                <FaLinkedin size={30}/>
            ),
            href: "https://www.linkedin.com/in/ankitkarn3954/",
            style: "rounded-tr-md"
        },
        {
            id:2,
            child:(
                 <BsGithub size={30}/>
            ),
            href: "https://github.com/ankit3954",
        },
        {
            id:3,
            child:(
                 <AiOutlineMail size={30}/>
            ),
            href: "mailto:ankitkarn064@gmail.com",
        },
        {
            id:4,
            child:(
                <HiOutlineDocument size={30}/>
            ),
            href: "/myresume.pdf",
            style: "rounded-br-md",
            download: true
        }

    ];

  return (
    <div className='md:hidden flex justify-center items-center h-[10rem] w-full bg-gradient-to-b
    from-gray-800 to-black'>
        <div>
        <ul className='flex flex-row '>
           {links.map(({id, child, href, style, download}) => (
                 <li key={id} 
                 className={"hover:scale-105 duration-300 bg-transparent flex justify-between "}>
                     <a className='px-3 flex justify-between items-center w-full
                     text-white'
                     href={href}
                     download={download}
                     target='_blank'
                     rel="noreferrer"
                     >
                         <>
                            {child}
                         </>
                     </a>
                 </li>
           ))}
        </ul>
        </div>
         

    </div>
  )
}

export default SocialLinksPC