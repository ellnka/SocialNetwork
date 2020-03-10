import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setUserData,
  getAuthUserThunkCreator,
  loginUserThunkCreator
} from '../../redux/auth-reducer'
import Login from './Login'
// import { Redirect } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'

const LoginContainer = ({ loginUser, isFetching, isAuth }) => {
  if (isFetching) return <Preloader />

  if (isAuth) return null
  return <Login handleLoginUser={loginUser} />
}

LoginContainer.propTypes = {
  isAuth: PropTypes.bool,
  isFetching: PropTypes.bool,
  loginUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userData: state.usersPage.userData,
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {
  setUserData,
  getAuthUser: getAuthUserThunkCreator,
  loginUser: loginUserThunkCreator
})(LoginContainer)
