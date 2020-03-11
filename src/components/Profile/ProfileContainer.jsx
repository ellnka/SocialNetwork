import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfileThunkCreator, getAuthUserProfileThunkCreator } from '../../redux/profile-reducer'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { getUserProfile, getIsProfileFetching, getIsAuthorizedProfile, getIsAuth, getIsAuthFetching } from '../../redux/profile-selector'

const ProfileContainer = ({
  userProfile, isProfileFetching, isAuthFetching, isAuthorizedProfile, isAuth, match,
  requestUserProfile, getAuthUser
}) => {
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
  if (!isAuthorizedProfile && !isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return null
  return (
    <Profile
      userProfile={userProfile}
      isAuthorizedProfile={isAuthorizedProfile}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.object,
  isProfileFetching: PropTypes.bool,
  isAuthFetching: PropTypes.bool,
  isAuthorizedProfile: PropTypes.bool,
  isAuth: PropTypes.bool,
  match: PropTypes.object,
  requestUserProfile: PropTypes.func,
  getAuthUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  isAuthorizedProfile: getIsAuthorizedProfile(state),
  isAuth: getIsAuth(state),
  isAuthFetching: getIsAuthFetching(state)
})

export default compose(
  connect(mapStateToProps, {
    requestUserProfile: getUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
