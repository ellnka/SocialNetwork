import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) {
        return <Redirect to='/login' />
      } else {
        return <Component {...this.props} />
      }
    }
  }

  RedirectComponent.propTypes = {
    isAuth: PropTypes.bool,
    getAuthUser: PropTypes.func
  }

  return connect(mapStateToProps, {})(RedirectComponent)
}

export default withAuthRedirect
