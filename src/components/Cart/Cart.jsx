import React from 'react'
import './Cart.css'
import hair1 from '../../assets/hair-1.jpeg'
import hair2 from '../../assets/hair-2.jpg'
import hair3 from '../../assets/hair-3.jpg'
import hair4 from '../../assets/hair-4.jpeg'
import hair5 from '../../assets/hair-5.jpg'
import hair6 from '../../assets/hair-6.jpg'
import hair7 from '../../assets/hair-7.jpg'
import hair8 from '../../assets/hair-8.jpg'


const Cart = () => {
  return (
    <div>
        <div className="rectangle">
            
            <div id="product-atc">
                <h2>Packages</h2>
            </div>
    
            <div className="atc-container">
    
                <div className="product-container">
                    <div className="product">
                        <img src={hair1} alt=""/>
                        <div className="product-content">
                            <p className="product-title">HAIR CUTTING & STYLING</p>
                            <p className="product-description">&#8377; 250</p>
                            <button className="product-btn">Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair2} alt=""/>
                        <div className="product-content">
                            <p className="product-title">HAIR COLOURING </p>
                            <p className="product-description">&#8377; 300</p> 
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair3} alt=""/>
                        <div className="product-content">
                            <p className="product-title">HAIR SPA AND TREATMENT</p>
                            <p className="product-description">&#8377; 499</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair4} alt=""/>
                        <div className="product-content">
                            <p className="product-title">BEARD CUTTING & STYLING</p>
                            <p className="product-description">&#8377; 150</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair5} alt=""/>
                        <div className="product-content">
                            <p className="product-title">FACIAL & CLEANUP</p>
                            <p className="product-description">&#8377; 399</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair6} alt=""/>
                        <div className="product-content">
                            <p className="product-title">DETAN</p>
                            <p className="product-description">&#8377;399</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair7} alt=""/>
                        <div className="product-content">
                            <p className="product-title">PEDICURE</p>
                            <p className="product-description">&#8377;249</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={hair8} alt=""/>
                        <div className="product-content">
                            <p className="product-title">AYURVEDIC  MASSAGE</p>
                            <p className="product-description">&#8377;299</p>
                            <button className="product-btn" >Add To Cart</button>
                        </div>
                    </div>
    
                </div>
    
                <div className="add-to-card">
                    <div className="my-cart">
                        <h2>Shopping Cart</h2>
                        <ul id="cart-items">
                            
                        </ul>
                        <hr/>
                        <p>Total : &#8377; <span id="cart-total">0.00</span></p>
                    </div>
                </div>
    
            </div>
        
        </div>
    </div>
  )
}

export default Cart