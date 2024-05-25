import React, { useState } from 'react'
import './Hero.css'
import logo from '../../assets/logo.png'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {

  return (
     <div className="banner">
         <img src={logo} className="logo"/>
        <div className="banner-text">
            <h1>Hair Studio</h1>
            <p>Style Your Hair Is Style Your Life</p>
            <div className="banner-btn">
               <Link to='login' > <button><span ></span>Sign UP</button></Link>
                <button><span></span>Sign In</button> 
            </div>
        </div> 

    </div>
  )
}

export default Hero