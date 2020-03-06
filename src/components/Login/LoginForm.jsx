import React from 'react'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import Input from './../common/FormControls/Input'
import { required } from './../../utils/validators/validators'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div className='form-group row'>
        <label htmlFor='email_address' className='col-md-4 col-form-label text-md-right'>E-Mail Address</label>
        <div className='col-md-6'>
          <Field placeholder='Email' component={Input} name='email' className='form-control' validate={[required]} required autoFocus />
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor='password' className='col-md-4 col-form-label text-md-right'>Password</label>
        <div className='col-md-6'>
          <Field placeholder='Password' component={Input} type='password' name='password' className='form-control' validate={[required]} required />
        </div>
      </div>

      <div className='form-group row'>
        <div className='col-md-6 offset-md-4'>
          <div className='checkbox'>
            <label>
              <Field component='input' type='checkbox' name='rememberMe' /> Remember Me
            </label>
          </div>
        </div>
      </div>

      {props.error &&
        <div className='form-group row'>
          <div className='col-md-6 offset-md-4'>
            <p className='text-danger'> {props.error} </p>
          </div>
        </div>}

      <div className='col-md-6 offset-md-4'>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </div>

    </form>)
}

LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: 'login' })(LoginForm)
