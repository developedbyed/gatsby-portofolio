import React from 'react'
import Link from 'gatsby-link'
import { Home, Mail, Activity } from 'react-feather'

const Header = ({ siteTitle }) => (
  <div className="nav-wrapper">
    <div className="nav-image">
    </div>
    <ul className="nav-links">
      <Link to="/" className="nav-link">
        <Home />
        <p>Home</p>
      </Link>
      <Link to="/projects" className="nav-link">
        <Activity />
        <p>Projects</p>
      </Link>
      <Link to="/contact" className="nav-link">
        <Mail />
        <p>Contact</p>
      </Link>
    </ul>
  </div>
)

export default Header
