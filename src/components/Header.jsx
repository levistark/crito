import React from 'react'
import '../assets/css/main.scss'
import critoLogo from '../assets/images/Logo/Logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
            <div className="logo-container">
                <a href="index.html">
                  <img src={critoLogo} alt="Crito Logotype" className="logotype"/>
                </a>
            </div>
            <div className="nav-container">
                <div className="nav-contact-container">
                    <div className="header-contact">
                        <address>+46 (8) 121 470 50</address>
                        <i className="fa-regular fa-envelope"></i>
                        <address>info@crito.com</address>
                        <i className="fa-regular fa-location-dot"></i>
                        <address className="last">Sveavägen 31, 111 34 STOCKHOLM</address>
                    </div>
                    <div className="header-social">
                        <a href="#"><i className="fa-brands fa-facebook" ></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin" ></i></a>
                    </div>
                </div>
                <i className="navbar-icon fa-solid fa-bars"></i>

                <div className="header-bot">
                    <div className="header-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Services</NavLink>
                        <NavLink to="/">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <button className="btn-login">Login<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header