import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {HiOutlineDocument} from "react-icons/hi"

function SocialLinks() {

    const links = [
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/ankitkarn3954/",
            style: "rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>GitHub <BsGithub size={30}/></>
            ),
            href: "https://github.com/ankit3954",
        },
        {
            id:3,
            child:(
                <>Mail <AiOutlineMail size={30}/></>
            ),
            href: "mailto:ankitkarn064@gmail.com",
        },
        {
            id:4,
            child:(
                <>Resume <HiOutlineDocument size={30}/></>
            ),
            href: "/myresume.pdf",
            style: "rounded-br-md",
            download: true
        }

    ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {links.map(({id, child, href, style, download}) => (
                 <li key={id} 
                 className={"bg-gray-500 flex justify-between items-center h-[45px] w-36 px-[8px] ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-300" 
                 + " " 
                 + style}>
                     <a className='flex justify-between items-center w-full
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
  )
}

export default SocialLinks