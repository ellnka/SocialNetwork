import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'reactstrap'
import avatar from '../../assets/images/avatar.png'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'
import FollowContainer from '../common/Follow/FollowProfileContainer'
import ProfileData from './ProfileInfo/ProfileData'
import ProfileDataForm from './ProfileInfo/ProfileDataForm'
import ProfilePhoto from './ProfileInfo/ProfilePhoto'
import SendMessageContainer from './../common/SendMessage/SendMessageContainer'

const Profile = ({ userProfile, isOwner, isAuth, followed, isEdited, changeProfile, changePhoto, setIsEdited }) => {
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
          {isOwner && <ProfilePhoto userId={userProfile.userId} changePhoto={changePhoto} />}
        </div>
        <div>
          {isOwner && <ProfileStatusContainer />}
          {isEdited
            ? <ProfileDataForm userProfile={userProfile} initialValues={userProfile} onSubmit={handleProfileFormSubmit} />
            : <ProfileData userProfile={userProfile} activateEditMode={() => { setIsEdited(true) }} isOwner={isOwner} />}
          <div className='btn-group'>
            {!isOwner && isAuth && <FollowContainer userId={userProfile.userId} followed={followed} />}
            <div className='mr-2' />
            {!isOwner && isAuth && <SendMessageContainer user={userProfile} />}
          </div>
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
  changePhoto: PropTypes.func,
  setIsEdited: PropTypes.func
}

export default Profile
