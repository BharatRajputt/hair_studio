import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Packages from '../Packages/Packages'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const HairStudio = () => {
  return (
    <div>
        
        <Hero/>
       <Features/>
        <Services/>
        <Testimonials/>
          <Packages/>
        <Footer/> 
    </div>
  )
}

export default HairStudio