import { useState } from 'react'
import './App.css'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'
// import Features from './components/Features/Features'
// import Services from './components/Services/Services'
// import Testimonial from './components/Testimonials/Testimonials'
import Hairstudio from './components/Pages/Hairstudio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
import LoginSignup from './components/Pages/LoginSignup'
import Packages from './components/Packages/Packages'

function App() {

  return (
  <>
  
  <BrowserRouter>
  {/* <Navbar/> */}
<Routes>
<Route path='/' element={<Hairstudio/>} />
<Route path='/login' element={<LoginSignup/>}/>
<Route path='/cart' element={<Packages/>}/>

</Routes>
   </BrowserRouter>
  </>

  )
}

export default App
