 import { div } from 'framer-motion/client'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact  from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage'
import BlogsPage from './pages/BlogsPage'
import Sidenav from './components/Sidenav'
import ScrollToTopButton from './ScrollToTopButton'
 
 const App = () => {
   return (
      <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
          <div className=' fixed top-0 -z-10 h-full w-full '>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

          </div>
          <div className='container mx-auto px-8'>
          <ScrollToTopButton />
          <Navbar/>
              <Sidenav/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/projects' element={<ProjectsPage />}/>
              <Route path='/blogs' element={<BlogsPage/>} />
            </Routes>
          <Footer/>
          </div>
      </div>
   )
 }
 
 export default App