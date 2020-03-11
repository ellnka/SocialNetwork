import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ userProfile, isAuthorizedProfile, isAuth, followed }) => {
  return (
    <div className='container'>
      <ProfileInfo
        userProfile={userProfile}
        isAuthorizedProfile={isAuthorizedProfile}
        isAuth={isAuth}
        followed={followed}
      />
    </div>
  )
}

Profile.propTypes = {
  userProfile: PropTypes.object,
  isAuthorizedProfile: PropTypes.bool,
  isAuth: PropTypes.bool,
  followed: PropTypes.bool
}

export default Profile
