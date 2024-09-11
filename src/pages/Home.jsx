import React from 'react'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Skills from '../components/Skills'
 


const Home = () => {
  return (
    <div> 
     <Hero/>
      <About />
     <Technologies/>
     <Skills/>
    </div>
  )
}

export default Home