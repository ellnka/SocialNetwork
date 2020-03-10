import React from 'react'
import PropTypes from 'prop-types'
import { Button, Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = ({ userData, isAuth, handleLogout }) => (
  <header className='app-header'>
    <div className='login-box'>
      <Navbar className='m1-auto top-nav'>
        <nav className='nav'>
          <li className='nav-item'><span className='nav-item-title'> {userData && userData.login} </span></li>
        </nav>
        <nav>
          <li className='nav-item'>{isAuth && <Button color='secondary' onClick={handleLogout}>Logout</Button>}</li>
        </nav>
        <nav>
          <li className='nav-item'>{!isAuth && <NavLink to='/login'>Login</NavLink>}</li>
        </nav>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  userData: PropTypes.object,
  isAuth: PropTypes.bool,
  handleLogout: PropTypes.func
}

export default Header
