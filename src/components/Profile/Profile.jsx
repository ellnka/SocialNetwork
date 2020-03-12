import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'reactstrap'
import avatar from '../../imgs/avatar.png'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'
import FollowContainer from '../common/Follow/FollowProfileContainer'
import ProfileData from './ProfileInfo/ProfileData'
import ProfileDataForm from './ProfileInfo/ProfileDataForm'

const Profile = ({ userProfile, isOwner, isAuth, followed, changeProfile }) => {
  const [editMode, setEditMode] = React.useState(false)
  const activateEditMode = () => { setEditMode(true) }
  const deActivateEditMode = () => { setEditMode(false) }

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
      deActivateEditMode()
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
          {editMode
            ? <ProfileDataForm userProfile={userProfile} initialValues={userProfile} onSubmit={handleProfileFormSubmit} />
            : <ProfileData userProfile={userProfile} activateEditMode={activateEditMode} isOwner={isOwner} />}
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
  followed: PropTypes.bool,
  changeProfile: PropTypes.func
}

export default Profile
