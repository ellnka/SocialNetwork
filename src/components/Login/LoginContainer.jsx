import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setUserData,
  getAuthUserThunkCreator,
  loginUserThunkCreator
} from '../../redux/auth-reducer'
import Login from './Login'
import { Redirect } from 'react-router-dom'

const LoginContainer = (props) => {
  if (props.isAuth) return <Redirect to='/myprofile' />
  return <Login handleLoginUser={props.loginUser} />
}

LoginContainer.propTypes = {
  isAuth: PropTypes.bool,
  loginUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userData: state.usersPage.userData,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
  setUserData,
  getAuthUser: getAuthUserThunkCreator,
  loginUser: loginUserThunkCreator
})(LoginContainer)
