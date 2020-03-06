import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({ input, meta, ...props }) => {
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
  children: PropTypes.array,
  input: PropTypes.object,
  meta: PropTypes.object
}

export default FormControl
