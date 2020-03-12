import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Input } from 'reactstrap'

export const FormControl = ({ input, meta, ...props }) => {
  const isInvalid = meta.touched && meta.error
  return (
    <div>
      {props.children}
      {isInvalid &&
        <div className='inline m-b-none m-t-none abs invalid-feedback'>
          {meta.error}
        </div>}
    </div>
  )
}
FormControl.propTypes = {
  children: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object
}

export const TextareaControl = (props) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
TextareaControl.propTypes = {
  children: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object
}

export const InputControl = (props) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><Input {...input} {...restProps} /></FormControl>
}
InputControl.propTypes = {
  children: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object
}

export const createInputField = (placeholder, name, validators, props = {}, text = '') => (
  <div>
    <Field
      component={InputControl}
      name={name}
      placeholder={placeholder}
      validate={validators}
      {...props}
    /> {text}
  </div>
)
