import React from 'react'
import { motion } from 'framer-motion'

const aboutImg = 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YSUyMG1hbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww'
const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

const About = () => {
  return (
    <div id='main' className='border-b border-neutral-900 pb-4'> 
        <motion.h1 
         whileInView={{ opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>About <span className=' text-neutral-500'> Me</span> </motion.h1>

        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center hover:-translate-y-1 transition hover:scale-110 duration-300 ease-in-out'>
                    <img src={aboutImg} alt="" />
                </div>
                
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 1.5}}
            className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start hover:border-4 hover:p-4 hover:border-purple-900'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About