import React from 'react'
import './Testimonials.css'
import img1 from '../../assets/img-1.jpg'
import img2 from '../../assets/img-2.jpg'
import img3 from '../../assets/img-3.jpg'
const Testimonial = () => {
  return (
    <div>
           <section id="testimonial">
        <div className="title-text">
            <p>TESTIMONIAL</p>
            <h1>What Client Say's</h1>
        </div>
        <div className="testimoinal-row">
            <div className="testimonial-col">
                <div className="user">
                    <img src={img1} alt=""/>
                    <div className="user-info">
                        <h4>Aadi Singh
                            <i className="fa fa-twitter"></i>
                        </h4>
                        <small>@Singaadi</small>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, eum dolor? Non blanditiis nulla
                    debitis reiciendis. Praesentium mollitia,?</p>
            </div>
            <div className="testimonial-col">
                <div className="user">
                    <img src={img2} alt=""/>
                    <div className="user-info">
                        <h4>HARSH
                            <i className="fa fa-twitter"></i>
                        </h4>
                        <small>@harsin</small>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laudantium ipsam tempore corporis ipsum
                    possimus quibusdam temporibus nostrum</p>
            </div>
            <div className="testimonial-col">
                <div className="user">
                    <img src={img3} alt=""/>
                    <div className="user-info">
                        <h4>GORAV
                            <i className="fa fa-twitter"></i>
                        </h4>
                        <small>@gavsoni</small>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit odio a magni maiores
                    necessitatibus quae perferendis illo, corporis quia deserunt enim ipsam sed ullam omnis rerum.
                    Molestias?</p>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Testimonial