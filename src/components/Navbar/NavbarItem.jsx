import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Feather from 'react-feather'
import PropTypes from 'prop-types'

const NavbarItem = (props) => {
  const url = props.item.link.charAt(0) === '/' ? props.item.link : `/${props.item.link}`
  const Icon = props.item.icon && Feather[props.item.icon] ? Feather[props.item.icon] : null
  return (
    <li className='nav-item'>
      <NavLink to={url} activeClassName='active'>
        {props.item.icon && Icon && <Icon className='side-nav-icon' />}
        <span className='nav-item-label'>{props.item.title}</span>
      </NavLink>
    </li>
  )
}

NavbarItem.propTypes = {
  item: PropTypes.object
}

export default NavbarItem
