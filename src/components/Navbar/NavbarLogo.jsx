import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavbarLogo = (props) => {
  return (
    <div className='site-logo-bar'>
      <NavLink to='/' className='navbar-brand'>
        {props.logo && <img src={props.logo} alt='' />}
        {props.logoText && <span className='logo-text'>{props.logoText}</span>}
      </NavLink>
    </div>
  )
}

NavbarLogo.propTypes = {
  logo: PropTypes.string,
  logoText: PropTypes.string
}

export default NavbarLogo
