import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfileThunkCreator, getAuthUserProfileThunkCreator, changeUserProfileThunkCreator } from '../../redux/profile-reducer'
import { getUserProfile, getIsProfileFetching, getIsAuth, getIsAuthFetching, getFollowed, getIsUpdating } from '../../redux/profile-selector'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'

const ProfileContainer = ({
  userProfile, isProfileFetching, isUpdating, followed, isAuthFetching, isAuth, match,
  requestUserProfile, getAuthUser, changeProfile
}) => {
  const isAuthProfile = !match.params.userId
  useEffect(() => {
    if (match.params.userId) {
      requestUserProfile(match.params.userId)
    } else {
      getAuthUser()
    }
  }, [match.params.userId])

  const isProfileFound = userProfile && userProfile.fullName
  const isProfileLoading = match.params.userId && userProfile && +match.params.userId !== +userProfile.userId

  if (isProfileFetching || isAuthFetching || isProfileLoading || isUpdating) return <Preloader />
  if (isAuthProfile && !isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return null
  return (
    <Profile
      userProfile={userProfile}
      isOwner={isAuthProfile}
      isAuth={isAuth}
      followed={followed}
      changeProfile={changeProfile}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.object,
  followed: PropTypes.bool,
  isProfileFetching: PropTypes.bool,
  isUpdating: PropTypes.bool,
  isAuthFetching: PropTypes.bool,
  isAuth: PropTypes.bool,
  match: PropTypes.object,
  requestUserProfile: PropTypes.func,
  getAuthUser: PropTypes.func,
  changeProfile: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  isAuth: getIsAuth(state),
  isAuthFetching: getIsAuthFetching(state),
  followed: getFollowed(state),
  isUpdating: getIsUpdating(state)
})

export default compose(
  connect(mapStateToProps, {
    requestUserProfile: getUserProfileThunkCreator,
    changeProfile: changeUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
