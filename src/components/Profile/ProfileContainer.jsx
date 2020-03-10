import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { setUserId, getUserProfileThunkCreator, setIsAuthorizedProfile, getAuthUserProfileThunkCreator } from '../../redux/profile-reducer'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { getUserProfile, getIsProfileFetching, getAuthUserData, getUserId, getIsAuthorizedProfile, getIsAuth, getIsAuthFetching } from '../../redux/profile-selector'

const ProfileContainer = ({
  userProfile, isProfileFetching, isAuthFetching, isAuthorizedProfile, isAuth, match, authUserData,
  getUserProfile, setUserId, setIsAuthorizedProfile, getAuthUser
}) => {
  useEffect(() => {
    if (match.params.userId) {
      setIsAuthorizedProfile(false)
      setUserId(match.params.userId)
      getUserProfile(match.params.userId)
    } else {
      getAuthUser()
    }
  }, [match.params.userId])

  const isProfileFound = userProfile && userProfile.fullName
  if (isProfileFetching || isAuthFetching) return <Preloader />
  if (!isAuthorizedProfile && !isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return null
  return (
    <Profile
      userProfile={userProfile}
      userData={authUserData}
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
  userId: PropTypes.number,
  match: PropTypes.object,
  authUserData: PropTypes.object,
  getUserProfile: PropTypes.func,
  setUserId: PropTypes.func,
  setIsAuthorizedProfile: PropTypes.func,
  getAuthUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  authUserData: getAuthUserData(state),
  userId: getUserId(state),
  isAuthorizedProfile: getIsAuthorizedProfile(state),
  isAuth: getIsAuth(state),
  isAuthFetching: getIsAuthFetching(state)
})

export default compose(
  connect(mapStateToProps, {
    setUserId,
    setIsAuthorizedProfile,
    getUserProfile: getUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
