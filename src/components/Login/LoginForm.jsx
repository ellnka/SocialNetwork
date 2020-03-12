import React from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

// import { required } from './../../utils/validators/validators'
import { LOGIN_FORM_NAME } from './../../redux/auth-reducer'
import { LoginFormInput, LoginFormCheckBox, LoginFormError, LoginFormButton } from './LoginFormFields'

const LoginForm = ({ error, handleSubmit }, ...props) => (
  <form onSubmit={() => { handleSubmit() }}>

    <LoginFormInput
      fieldName='email'
      type='input'
      placeholder='Email'
      validate={[]} // {[required]}
      label='E-Mail Address'
      {...props}
    />

    <LoginFormInput
      fieldName='password'
      placeholder='Password'
      type='password'
      validate={[]} // {[required]}
      label='Password'
      {...props}
    />

    <LoginFormCheckBox fieldName='rememberMe' label='Remember Me' />

    {error && <LoginFormError error={error} />}

    <LoginFormButton name='Login' />

  </form>)

LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: LOGIN_FORM_NAME })(LoginForm)
