import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import critoLogo from '../../assets/images/Logo/Logo.svg'
import whiteLogo from '../../assets/images/Logo/Logo-white.svg'

const MobileNav = ({navState, setNavState}) => {
    const handleNavState = () => {
        setNavState(prev => !prev)
      }

    

  return (
    <div className={navState ? `hidden` : ``}>
        <div className='mobile-nav-wrapper'>
            <div className="container">
                <div className='mobile-nav-header'>
                    <div className="logo-container">
                        <Link to="/">
                            <img src={whiteLogo} alt="Crito Logotype" className="logotype"/>
                        </Link>
                    </div>
                    <button className='navbar-icon navbar-toggler' onClick={handleNavState}>
                        <i className="navbar-icon fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="nav-container">
                    <nav className="mobile-nav">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/articles'>Articles & News</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <button className="btn-login">Login<i className="fa-solid fa-arrow-right"></i></button>

                    </nav>
                </div>
                
            </div>
        </div>  
    </div>
  )
}

export default MobileNav