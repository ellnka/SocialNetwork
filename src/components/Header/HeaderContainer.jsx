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

const HeaderContainer = (props) => {
  return (
    <div>
      <Auth userData={props.userData} handleLogout={props.logoutUser} />
      <Header userData={props.userData} handleLogout={props.logoutUser} />
    </div>)
}

HeaderContainer.propTypes = {
  userData: PropTypes.object,
  logoutUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userData: state.auth.userData
})

export default connect(mapStateToProps, {
  setUserData,
  getAuthUser: getAuthUserThunkCreator,
  logoutUser: logoutUserThunkCreator
})(HeaderContainer)
