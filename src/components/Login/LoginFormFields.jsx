import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'

export const LoginFormInput = ({ component = 'input', fieldName, type = 'input', placeholder, autocomplete, validate, required, autoFocus, label = '' }) =>
  (
    <div className='form-group row'>
      {label && <label htmlFor={fieldName} className='col-md-4 col-form-label text-md-right'>{label}</label>}
      <div className='col-md-6'>
        <Field
          placeholder={placeholder}
          component={component}
          type={type}
          name={fieldName}
          autoComplete={autocomplete}
          className='form-control'
          validate={validate}
          required={required}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  )
LoginFormInput.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.object, PropTypes.string]),
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
  validate: PropTypes.array,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  label: PropTypes.string
}

export const LoginFormCheckBox = ({ component, fieldName, type = 'checkbox', label = '' }) => (
  <div className='form-group row'>
    <div className='col-md-6 offset-md-4'>
      <div className='checkbox'>
        <label>
          <Field component={component} type={type} name={fieldName} /> {label}
        </label>
      </div>
    </div>
  </div>
)
LoginFormCheckBox.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.object, PropTypes.string]),
  fieldName: PropTypes.string,
  type: PropTypes.string,
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
