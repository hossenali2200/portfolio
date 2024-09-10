import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {

   const [nav, setNav] = useState(false)
    
  return (
   <div>
       

           <div className=' fixed top-[25%] z-10'>
               <div className='flex flex-col'>
                   <a href="/" className='rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineHome size={20}/>
                   </a>
                   <a href="#work" className='rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <GrProjects size={20}/>
                   </a>
                   <a href="#projects" className='rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineProject size={20}/>
                   </a>
                   <a href="#main" className='rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <BsPerson size={20}/>
                   </a>
                   <a href="/contact" className='rounded-full shadow-lg bg-purple-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <AiOutlineMail size={20}/>
                   </a>
               </div>
           </div>
   </div>
  )
}

export default Sidenav
