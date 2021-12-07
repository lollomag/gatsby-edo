import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="header-desktop">
        <a href="index.html">
          <img
            className="logo"
            src={logo}
            width="100"
            height="100"
            alt="my logo"
          ></img>
        </a>
        <nav>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/photo" className="nav-item">
            Photos
          </Link>
          <Link to="/cinema" className="nav-item">
            Cinema
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </nav>
      </div>
      <div className="header-mobile">
        <div className="mobile-head">
          <a href="index.html">
            <img
              className="logo"
              src={logo}
              width="30"
              height="30"
              alt="my logo"
            ></img>
          </a>
          <span role="button" tabIndex="-1" className="hamburger-mobile material-icons-outlined" onClick={toggleMobile}>menu</span>
        </div>
        <div className={isOpen ? 'mobile-navigation show' : 'mobile-navigation'}>
          <nav> 
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/photo" className="nav-item">
              Photos
            </Link>
            <Link to="/cinema" className="nav-item">
              Cinema
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
