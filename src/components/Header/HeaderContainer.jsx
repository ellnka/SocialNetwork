import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setUserData,
  getAuthUserThunkCreator,
  logoutUserThunkCreator
} from '../../redux/auth-reducer'
import Header from './Header'
import Auth from './Auth'

const HeaderContainer = ({ userData, isAuth, logoutUser }) => (
  <div>
    <Auth userData={userData} handleLogout={logoutUser} />
    <Header userData={userData} handleLogout={logoutUser} isAuth={isAuth} />
  </div>)

HeaderContainer.propTypes = {
  userData: PropTypes.object,
  isAuth: PropTypes.bool,
  logoutUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
  setUserData,
  getAuthUser: getAuthUserThunkCreator,
  logoutUser: logoutUserThunkCreator
})(HeaderContainer)
