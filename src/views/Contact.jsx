import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import contactGraphic from '../assets/images/Showcase/Vector.svg'
import contactGraphic2 from '../assets/images/Showcase/Vector-2.svg'
import GoogleMaps from '../components/GoogleMaps'
import { Link, NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <Header/>
        
        <section className="ctc-showcase">
            <div className="ctc-showcase-container container">
                <Link to="/">Home</Link>
                <Link to="/contact"><strong>Contact</strong></Link>
                <h1><strong>Let's Connect</strong></h1>
            </div>

            <img src={contactGraphic} alt="flow vector image" className="img-vector-thick"/>
            <img src={contactGraphic2} alt="flow vector image" className="img-vector-thin"/>
        </section>  

        <main className="main">
            <section className="contact-container container">
                <div className="grid-container">
                    <div className="grid-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="text-container">
                            <h5>Visit us</h5>
                            <address><p>Sveavägen 31 <br/>111 34 STOCKHOLM</p></address>
                        </div>
                    </div>
                    <div className="grid-item">
                        <i className="fa-solid fa-phone"></i>
                        <div className="text-container">
                            <h5>Call us</h5>
                            <address><p>+46 (8) 121 470 50 <br/>+46 (8) 121 470 51</p></address>
                        </div>
                    </div>
                    <div className="grid-item">
                        <i className="fa-light fa-envelope"></i>
                        <div className="text-container">
                            <h5>Email us</h5>
                            <address><p>info@crito.com <br/>support@crito.com</p></address>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <h2>Leave us a message <br/>for any information.</h2>
                    <form action="#">
                        <input type="text" placeholder="Name*" required/>
                        <input type="email" placeholder="Email*" required/>
                        <input type="text" placeholder="Your Message*" required/>
                        <button type="submit">Send Message<i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </section>
            <GoogleMaps/>
        </main>

        <Footer/>
    </>
  )
}

export default Contact