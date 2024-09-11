import React from 'react'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Skills from '../components/Skills'
 
import Education from '../components/Education'
import RecentWork from '../components/RecentWork'
 


const Home = () => {
  return (
    <div> 
     <Hero/>
      <About />
     <Technologies/>
     <Skills/>
     <Education/>
     <RecentWork/>
    </div>
  )
}

export default Home