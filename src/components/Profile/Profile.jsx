import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className='container'>
      <ProfileInfo
        userProfile={props.userProfile}
        isAuthorizedProfile={props.isAuthorizedProfile}
        status={props.status}
        onStatusChanged={props.onStatusChanged}
      />
    </div>
  )
}

Profile.propTypes = {
  userProfile: PropTypes.object,
  isAuthorizedProfile: PropTypes.bool,
  status: PropTypes.string,
  onStatusChanged: PropTypes.func
}

export default Profile
