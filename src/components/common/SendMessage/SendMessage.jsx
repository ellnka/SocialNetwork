import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SendMessage = ({ user, addDialog }) => (
  <div>
    <NavLink to={`/messages/${user.id}`} color='info' onClick={() => { addDialog(user) }}> Send Message </NavLink>
  </div>)

SendMessage.propTypes = {
  user: PropTypes.object,
  addDialog: PropTypes.func
}

export default SendMessage
