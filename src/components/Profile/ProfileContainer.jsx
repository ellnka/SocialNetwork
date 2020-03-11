import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfileThunkCreator, getAuthUserProfileThunkCreator } from '../../redux/profile-reducer'
import { getUserProfile, getIsProfileFetching, getIsAuth, getIsAuthFetching, getFollowed } from '../../redux/profile-selector'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'

const ProfileContainer = ({
  userProfile, isProfileFetching, followed, isAuthFetching, isAuth, match,
  requestUserProfile, getAuthUser
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

  if (isProfileFetching || isAuthFetching || isProfileLoading) return <Preloader />
  if (isAuthProfile && !isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return null
  return (
    <Profile
      userProfile={userProfile}
      isAuthorizedProfile={isAuthProfile}
      isAuth={isAuth}
      followed={followed}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.object,
  followed: PropTypes.bool,
  isProfileFetching: PropTypes.bool,
  isAuthFetching: PropTypes.bool,
  isAuth: PropTypes.bool,
  match: PropTypes.object,
  requestUserProfile: PropTypes.func,
  getAuthUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  isAuth: getIsAuth(state),
  isAuthFetching: getIsAuthFetching(state),
  followed: getFollowed(state)
})

export default compose(
  connect(mapStateToProps, {
    requestUserProfile: getUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
