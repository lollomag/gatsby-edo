import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from '../../images/logo.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-desktop">
      <a href="index.html">
        <img className="logo" src={logo} width="100" height="100" alt="my logo"></img>
      </a>
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/photo" className="nav-item">Photos</Link>
        <Link to="/cinema" className="nav-item">Cinema</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
  </div>
      <div className="header-mobile">
        <div className="mobile-head">
          <a href="index.html">
            <img className="logo" src={logo} width="30" height="30" alt="my logo"></img>
      </a>
            <span className="hamburger-mobile material-icons-outlined">menu</span>
    </div>
          <div className="mobile-navigation">
            <nav>
              <a href="index.html" className="nav-item {{#if active-1}}active{{/if}}">Home</a>
              <a href="foto.html" className="nav-item {{#if active-2}}active{{/if}}">Photos</a>
              <a href="video.html" className="nav-item {{#if active-3}}active{{/if}}">Cinema</a>
              <a href="about.html" className="nav-item {{#if active-4}}active{{/if}}">About</a>
            </nav>
          </div>
        </div>
</header>
)

Header.propTypes = {
        siteTitle: PropTypes.string,
}

Header.defaultProps = {
        siteTitle: ``,
}

export default Header
