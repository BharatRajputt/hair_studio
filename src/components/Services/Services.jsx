import React from 'react'
import Picture1 from '../../assets/pic-1.jpg'
import Picture2 from '../../assets/pic-2.jpg'
import Picture3 from '../../assets/pic-3.jpg'
import Picture4 from '../../assets/pic-4.jpg'
import './Services.css'
const Services = () => {
  return (
    <div>
         <section id="service">
        <div className="title-text">
            <p>SERVICES</p>
            <h1>We provide Better</h1>
        </div>
        <div className="service-box">
            <div className="single-service">
                <img src={Picture1}/>
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Hair Styling</h3>
                    <hr/>
                    <p>this is under description under barber foundation this is test under barber description of barber
                        foundation.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={Picture2}/>
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Beard Trim</h3>
                    <hr/>
                    <p>this is under description under barber foundation this is test under barber description of barber
                        foundation.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={Picture3}/>
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Hair Cut</h3>
                    <hr/>
                    <p>this is under description under barber foundation this is test under barber description of barber
                        foundation.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={Picture4}/>
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Dry Shampoo</h3>
                    <hr/>
                    <p>this is under description under barber foundation this is test under barber description of barber
                        foundation.</p>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Services