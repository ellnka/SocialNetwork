import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  const userElements = props.users && props.users.map(
    (user, i) =>
      <div className='list-group-item' key={i}> <NavLink to={'/profile/' + user.id}> {user.name} </NavLink> </div>
  )

  return (
    <div className='list-group'>
      {userElements}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users
