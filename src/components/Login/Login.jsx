import React from 'react'
import PropTypes from 'prop-types'
import LoginFrom from './LoginForm'

const Login = (props) => {
  const handleLoginSubmit = (values) => {
    if (values.email && values.password) {
      props.handleLoginUser(values.email, values.password, !!values.rememberMe)
    }
  }

  return (
    <main className='login-form'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>Login</div>
              <div className='card-body'>
                <LoginFrom onSubmit={handleLoginSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

Login.propTypes = {
  handleLoginUser: PropTypes.func
}

export default Login
