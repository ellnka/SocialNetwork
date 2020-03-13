import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'reactstrap'
import avatar from '../../imgs/avatar.png'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'
import FollowContainer from '../common/Follow/FollowProfileContainer'
import ProfileData from './ProfileInfo/ProfileData'
import ProfileDataForm from './ProfileInfo/ProfileDataForm'

const Profile = ({ userProfile, isOwner, isAuth, followed, isEdited, changeProfile, setIsEdited }) => {
  const handleProfileFormSubmit = (values) => {
    if (values.fullName) {
      // handleLoginUser(values.email, values.password, !!values.rememberMe)
      const { lookingForAJob, lookingForAJobDescription, fullName, aboutMe, contacts } = values
      const data = {
        ...userProfile,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        aboutMe,
        contacts
      }
      changeProfile(data)
    }
  }

  return (
    <Card body>
      <div className='text-center'>
        <div className='m-b'>
          <img src={userProfile.photos.large || avatar} style={{ width: 100 }} className='b-circle' alt='profile' />
        </div>
        <div>
          {isOwner && <ProfileStatusContainer />}
          {isEdited
            ? <ProfileDataForm userProfile={userProfile} initialValues={userProfile} onSubmit={handleProfileFormSubmit} />
            : <ProfileData userProfile={userProfile} activateEditMode={() => { setIsEdited(true) }} isOwner={isOwner} />}
          {!isOwner && isAuth && <FollowContainer userId={userProfile.userId} followed={followed} />}
        </div>
      </div>
    </Card>
  )
}

Profile.propTypes = {
  userProfile: PropTypes.object,
  isAuth: PropTypes.bool,
  isOwner: PropTypes.bool,
  isEdited: PropTypes.bool,
  followed: PropTypes.bool,
  changeProfile: PropTypes.func,
  setIsEdited: PropTypes.func
}

export default Profile
