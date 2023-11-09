import React from 'react'
import footerSvg from '../assets/images/Showcase/Vector.svg'
import footerSvg2 from "../assets/images/Showcase/Vector-2.svg"
import footerLogo from '../assets/images/Logo/Logo-white.svg'

const Footer = () => {
  return (
    <>
        <footer>
            <img src={footerSvg} alt="flow vector image" className="img-vector-thick"/>
            <img src={footerSvg2} alt="flow vector image" className="img-vector-thin"/>

            <div className="container footer-container">
                <div className="nav-logo">
                    <a href="index.html"><img src={footerLogo} loading="lazy" alt="Crito Logotype" className="logotype"/><br/><br/></a>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                </div>
                <div className="nav-company">
                    <h4>Company</h4>
                    <nav>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </nav>
                </div>
                <div className="nav-help">
                    <h4>Help</h4>
                    <nav>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </nav>
                    
                </div>
                
                <div className="nav-resources">
                    <h4>Resources</h4>
                    <nav>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorials</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </nav> 
                </div>
                
                <div className="nav-link">
                    <h4>Link</h4>
                    <nav>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorials</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </nav>
                </div>
            </div>
            <footer className="bot-ruler">
                <div className="container bot-ruler-content">
                    &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved
                    <div className="footer-social">
                        <a href="#"><i className="fa-brands fa-facebook" ></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin" ></i></a>
                    </div>
                </div>
            </footer>
        </footer>
    </>
  )
}

export default Footer