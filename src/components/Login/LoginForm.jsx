import React from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Input from './../common/FormControls/Input'
// import { required } from './../../utils/validators/validators'
import { LOGIN_FORM_NAME } from './../../redux/auth-reducer'
import { LoginFormInput, LoginFormCheckBox, LoginFormError, LoginFormButton } from './LoginFormFields'

const LoginForm = ({ error, handleSubmit }) => (
  <form onSubmit={() => { handleSubmit() }}>

    <LoginFormInput
      component={Input}
      fieldName='email'
      type='input'
      placeholder='Email'
      autoComplete='current-email'
      //    validate={[required]}
      required
      autoFocus
      label='E-Mail Address'
    />

    <LoginFormInput
      component={Input}
      fieldName='password'
      placeholder='Password'
      type='password'
      autoComplete='current-password'
      //    validate={[required]}
      required
      autoFocus
      label='Password'
    />

    <LoginFormCheckBox component='input' fieldName='rememberMe' type='checkbox' label='Remember Me' />

    {error && <LoginFormError error={error} />}

    <LoginFormButton name='Login' />

  </form>)

LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: LOGIN_FORM_NAME })(LoginForm)
