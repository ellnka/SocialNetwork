import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfileThunkCreator, getAuthUserProfileThunkCreator, changeUserProfileThunkCreator, setIsEdited } from '../../redux/profile-reducer'
import { getUserProfile, getIsProfileFetching, getIsAuth, getFollowed, getIsUpdating, getIsEdited } from '../../redux/profile-selector'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'

const ProfileContainer = ({
  userProfile, isProfileFetching, isUpdating, isEdited, followed, isAuth, match,
  requestUserProfile, getAuthUser, changeProfile, setIsEdited
}) => {
  useEffect(() => {
    if (match.params.userId) {
      requestUserProfile(match.params.userId)
    } else {
      getAuthUser()
    }
  }, [match.params.userId])

  const isAuthProfile = !match.params.userId
  const isProfileFound = userProfile && userProfile.fullName
  // TODO: IMPROVE isProfileLoading
  const isProfileLoading = !isAuthProfile && userProfile && +match.params.userId !== +userProfile.userId
  if (!isEdited && (isProfileFetching || isProfileLoading || isUpdating)) return <Preloader />
  if (isAuthProfile && !isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return null

  return (
    <Profile
      userProfile={userProfile}
      isOwner={isAuthProfile}
      isAuth={isAuth}
      followed={followed}
      changeProfile={changeProfile}
      isEdited={isEdited}
      setIsEdited={setIsEdited}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.object,
  followed: PropTypes.bool,
  isProfileFetching: PropTypes.bool,
  isUpdating: PropTypes.bool,
  isEdited: PropTypes.bool,
  isAuth: PropTypes.bool,
  match: PropTypes.object,
  requestUserProfile: PropTypes.func,
  getAuthUser: PropTypes.func,
  changeProfile: PropTypes.func,
  setIsEdited: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  isAuth: getIsAuth(state),
  followed: getFollowed(state),
  isUpdating: getIsUpdating(state),
  isEdited: getIsEdited(state)
})

export default compose(
  connect(mapStateToProps, {
    requestUserProfile: getUserProfileThunkCreator,
    changeProfile: changeUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator,
    setIsEdited
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
