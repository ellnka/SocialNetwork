import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import FollowContainer from '../common/Follow/FollowUsersContainer'

const Users = ({ users, isAuth }) => {
  const userElements = users && users.map(
    (user, i) =>
      <div className='list-group-item' key={i}>
        <NavLink to={'/profile/' + user.id}> {user.name}</NavLink>
        {isAuth && <div className='float-right'><FollowContainer userId={user.id} followed={user.followed} /></div>}
      </div>
  )

  return (
    <div className='list-group'>
      {userElements}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array,
  isAuth: PropTypes.bool
}

export default Users
