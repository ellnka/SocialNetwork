import React from 'react'
import FormControl from './FormControl'
import PropTypes from 'prop-types'

const Input = (props) => (
  <FormControl {...props}> <input {...props.input} {...props} /> </FormControl>
)

Input.propTypes = {
  input: PropTypes.object
}

export default Input
