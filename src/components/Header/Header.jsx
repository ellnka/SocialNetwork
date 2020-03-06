import React from 'react'
import PropTypes from 'prop-types'
import { Button, Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className='app-header'>
      <div className='login-box'>
        <Navbar className='m1-auto top-nav'>
          <nav className='nav'>
            <li className='nav-item'><span className='nav-item-title'> {props.userData && props.userData.login} </span></li>
          </nav>
          <nav>
            <li className='nav-item'>{props.userData && <Button color='secondary' onClick={props.handleLogout}>Logout</Button>}</li>
          </nav>
          <nav>
            <li className='nav-item'>{!props.userData && <NavLink to='/login'>Login</NavLink>}</li>
          </nav>
        </Navbar>
      </div>
    </header>
  )
}

Header.propTypes = {
  userData: PropTypes.object,
  handleLogout: PropTypes.func
}

export default Header
