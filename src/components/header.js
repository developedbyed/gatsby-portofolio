import React from 'react'
import Link from 'gatsby-link'
import { Home, Mail, Activity } from 'react-feather'
import portrait from '../img/logoBig.svg'

const Header = ({ siteTitle }) => (
  <div className="nav-wrapper">
    <div className="nav-image">
      <img className="logo" src={portrait} alt="portrait" />
    </div>
    <ul className="nav-links">
      <Link to="/" className="nav-link">
        <Home />
      </Link>
      <Link to="/projects" className="nav-link">
        <Activity />
      </Link>
      <Link to="/contact" className="nav-link">
        <Mail />
      </Link>
    </ul>
  </div>
)

export default Header
