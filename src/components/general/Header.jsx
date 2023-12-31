import React, { useEffect, useState } from 'react'
import '../../assets/css/main.scss'
import critoLogo from '../../assets/images/Logo/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import MobileNav from './MobileNav'

const Header = () => {

  const [nav, setNav] = useState(true)

  useEffect(() => {
    setNav(true)
  }, [])

  const handleNavState = () => {
    setNav(prev => !prev)
  }

  return (
    <>
      {!nav?(
        <MobileNav navState={nav} setNavState={setNav}/>
      ):null}
      <header>
        <div className="container">
          <div className="logo-container">
              <Link to="/">
                <img src={critoLogo} alt="Crito Logotype" className="logotype"/>
              </Link>
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
              <button className='navbar-icon navbar-toggler' onClick={handleNavState}>
                <i className="navbar-icon fa-solid fa-bars"></i>
              </button>

              <div className="header-bot">
                  <div className="header-nav">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/">Services</NavLink>
                      <NavLink to="/articles">News</NavLink>
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