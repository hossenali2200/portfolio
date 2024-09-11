import { div } from 'framer-motion/client'
import React from 'react'
import { Link } from 'react-router-dom'
 
 
const data = [
  {
    icon:"https://cdn-icons-png.freepik.com/256/2504/2504923.png?ga=GA1.1.185833153.1715408241&semt=ais_hybrid ",
    link:"https://bd.linkedin.com/"
  },
  {
    icon:"https://cdn-icons-png.freepik.com/256/5968/5968764.png?ga=GA1.1.185833153.1715408241&semt=ais_hybrid ",
    link:"https://www.facebook.com/dmhossenali/"
  },
  {
    icon:"https://cdn-icons-png.freepik.com/256/3291/3291667.png?ga=GA1.1.185833153.1715408241&semt=ais_hybrid ",
    link:"https://github.com/hossenali2200"
  },
  {
    icon:" https://cdn-icons-png.freepik.com/256/3256/3256013.png?ga=GA1.1.185833153.1715408241&semt=ais_hybrid",
    link:"https://x.com/"
  }
]

const Navbar = () => {
  return (
     <nav className='  mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
           <Link to='/'><h2 className='font-extrabold text-5xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Hossen</h2></Link> 
        </div>
        <div>
          <a href="/contact" className=' border-none bg-purple-600 text-white text-2xl font-bold px-6 py-4 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-indigo-700'>Hire Me</a>
        </div>
        <div className='  lg:flex items-center justify-center gap-4 hidden text-2xl'>
            {data.map((nav,index)=>(
              <div key={index}>
                  <a href={nav.link} target='_blank'><img className='w-[40px] cursor-pointer hover:scale-110 ease-in duration-300' src={nav.icon} alt="" /></a>
              </div>
            ))}
        </div>
     </nav>
  )
}

export default Navbar