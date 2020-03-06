import React from 'react'
import PropTypes from 'prop-types'

const Avatar = (props) => {
  return (
    <div className={`avatar avatar-${props.size} bg-${props.color} ${props.className}`}>
      {props.initials && !props.image && <div className='user-initials'>{props.initials}</div>}
      {props.image && <img src={props.image} className='avatar-image' alt='' />}
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  initials: PropTypes.string
}

export default Avatar
