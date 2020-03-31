import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setUserData, loginUserThunkCreator } from '../../redux/auth-reducer'
import Login from './Login'
// import { Redirect } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'

const LoginContainer = (props) => {
  const { isAuth, loginUser } = props
  debugger
  console.log(props)
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
  isAuth: state.auth.isAuth
  //isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {
  setUserData,
  loginUser: loginUserThunkCreator
})(LoginContainer)
