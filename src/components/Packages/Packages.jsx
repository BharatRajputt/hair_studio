import React from 'react'
import './Packages.css'
import hair1 from '../../assets/hair-1.jpeg'
import hair2 from '../../assets/hair-2.jpg'
import hair3 from '../../assets/hair-3.jpg'
import hair4 from '../../assets/hair-4.jpeg'
import hair5 from '../../assets/hair-5.jpg'
import { Link } from 'react-router-dom'

const Packages = () => {


  return (
    <div>
        <section id="packages">
        <div className="title-text">
            <p>PACKAGES</p>
            <h1>Choose Your Packages</h1>
        </div>
        
        <div className="packages-container">
            <div className="card">
                <img src={hair1} alt=""/>
                <div className="card-content">
                    <p className="card-title">HAIR CUTTING & STYLING</p>
                    <p className="card-description"> <br/> &#8377; 250</p>
                    {/* <!-- <a href="#" className="btn">Read More</a> --> */}
                </div>
            </div>
    
            <div className="card">
                <img src={hair2} alt=""/>
                <div className="card-content">
                    <div className="card-title"><p >HAIR COLOURING </p></div>
                   <div className="card-description"> <p > <br/> &#8377; 300</p></div> 
                    {/* <!-- <a href="#" className="btn">Read More</a> --> */}
                </div>
            </div>
    
            <div className="card">
                <img src={hair3} alt=""/>
                <div className="card-content">
                    <p className="card-title">HAIR SPA AND TREATMENT</p>
                    <p className="card-description"> <br/> &#8377; 499</p>
                    {/* <!-- <a href="#" className="btn">Read More</a> --> */}
                </div>
            </div>
    
            <div className="card">
                <img src={hair4} alt=""/>
                <div className="card-content">
                    <p className="card-title">BEARD CUTTING & STYLING</p>
                    <p className="card-description"> <br/> &#8377; 150</p>
                    {/* <!-- <a href="#" className="btn">Read More</a> --> */}
                </div>
            </div>
    
            <div className="card">
                <img src={hair5} alt=""/>
                <div className="card-content">
                    <p className="card-title">SKIN CARE</p>
                    <p className="card-description"> <br/> &#8377; 399</p>
                    {/* <!-- <a href="#" className="btn">Read More</a> --> */}
                </div>
            </div>
        </div>

        <div className="more-div">
        <Link to={'/cart'} className="more-btn">More</Link>
        </div>
        
    </section>
  
    </div>
  )
}

export default Packages