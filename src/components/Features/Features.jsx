import React from 'react'
import './Features.css'
import barberMain from '../../assets/barber-man.jpg' 
const Features = () => {
  return (
    <>
    <div className="feature">
    
        <div className="title-text">
            <p>FEATURE'S</p>
            <h1>Why Choose Us</h1>
        </div>
        <div className="feature-box">
            <div className="features">
                <h1>Experienced Staff</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fa fa-shield"></i>
                    </div>
                    <div className="feature-text">
                        <p>Done eget Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint quaerat
                            molestias cumque tempore atque!</p>
                    </div>
                </div>
                <h1>Pre Booking Online</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fa fa-check-square-o"></i>
                    </div>
                    <div className="feature-text">
                        <p>Done eget Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint quaerat
                            molestias cumque tempore atque!</p>
                    </div>
                </div>
                <h1>Affordable Cost</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fa fa-inr"></i>
                    </div>
                    <div className="feature-text">
                        <p>Done eget Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint quaerat
                            molestias cumque tempore atque!</p>
                    </div>
                </div>

            </div>
            <div className="features-img">
                <img src={barberMain}/>

            </div>

        </div>
   

    </div>
    </>
  )
}

export default Features