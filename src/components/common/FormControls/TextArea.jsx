import React from 'react'
import FormControl from './FormControl'
import PropTypes from 'prop-types'

const TextArea = (props) => {
  return (
    <FormControl {...props}> <textarea {...props.input} {...props} /> </FormControl>
  )
}

TextArea.propTypes = {
  input: PropTypes.object
}

export default TextArea
