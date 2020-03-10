import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className='container'>
      <ProfileInfo
        userProfile={props.userProfile}
        isAuthorizedProfile={props.isAuthorizedProfile}
      />
    </div>
  )
}

Profile.propTypes = {
  userProfile: PropTypes.object,
  isAuthorizedProfile: PropTypes.bool
}

export default Profile
