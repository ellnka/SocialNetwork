import React from 'react'
import PropTypes from 'prop-types'
import { createInputField } from './../common/FormControls/FormControls'

export const LoginFormInput = ({ fieldName, placeholder, validate, label = '', type = 'input' }) =>
  (
    <div className='form-group row'>
      {label && <label htmlFor={fieldName} className='col-md-4 col-form-label text-md-right'>{label}</label>}
      <div className='col-md-6'>
        {createInputField(placeholder, fieldName, validate, { type })}
      </div>
    </div>
  )
LoginFormInput.propTypes = {
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.array,
  label: PropTypes.string
}

export const LoginFormCheckBox = ({ fieldName, label = '' }) => (
  <div className='form-group row'>
    <div className='col-md-6 offset-md-4'>
      <div className='checkbox'>
        <label>
          {createInputField('', fieldName, [], { type: 'checkbox' })} {label}
        </label>
      </div>
    </div>
  </div>
)
LoginFormCheckBox.propTypes = {
  fieldName: PropTypes.string,
  label: PropTypes.string
}

export const LoginFormError = ({ error }) => (
  <div className='form-group row'>
    <div className='col-md-6 offset-md-4'>
      <p className='text-danger'> {error} </p>
    </div>
  </div>
)
LoginFormError.propTypes = {
  error: PropTypes.string
}

export const LoginFormButton = ({ name }) => (
  <div className='col-md-6 offset-md-4'>
    <button type='submit' className='btn btn-primary'>
      {name}
    </button>
  </div>
)
LoginFormButton.propTypes = {
  name: PropTypes.string
}
