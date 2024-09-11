import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import { MdCastForEducation } from "react-icons/md";

const Sidenav = () => {

   const [nav, setNav] = useState(false)
    
  return (
   <div>
       

           <div className=' fixed right-0 top-[25%] z-10'>
               <div className='flex flex-col'>
                   <a href="#home" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineHome size={20}/>
                   </a>
                   <a href="#work" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <GrProjects size={20}/>
                   </a>
                   <a href="#education" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <MdCastForEducation  size={20}/>
                   </a>
                   <a href="#projects" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineProject size={20}/>
                   </a>
                   <a href="#main" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <BsPerson size={20}/>
                   </a>
                   <a href="/contact" className='rounded-full shadow-lg bg-purple-600 hover:bg-white hover:text-purple-600 font-bold  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineMail size={20}/>
                   </a>
               </div>
           </div>
   </div>
  )
}

export default Sidenav
