import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { setStatus, setUserId, getUserProfileThunkCreator, setIsAuthorizedProfile, getAuthUserProfileThunkCreator } from '../../redux/profile-reducer'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { getUserProfile, getIsProfileFetching, getAuthUserData, getUserId, getStatus, getIsAuthorizedProfile, getIsAuth } from '../../redux/profile-selector'

const ProfileContainer = (props) => {
  useEffect(() => {
    if (props.match.params.userId) {
      props.setIsAuthorizedProfile(false)
      props.setUserId(props.match.params.userId)
      props.getUserProfile(props.match.params.userId)
    } else {
      props.getAuthUser()
    }
  }, [props.match.params.userId])

  const isProfileFound = props.userProfile && props.userProfile.fullName

  if (props.isProfileFetching) return <Preloader />
  if (!props.isAuthorizedProfile && !props.isAuth) return <Redirect to='/login' />
  if (!isProfileFound) return <div />
  return (
    <Profile
      userProfile={props.userProfile}
      userData={props.authUserData}
      status={props.status}
      isAuthorizedProfile={props.isAuthorizedProfile}
      onStatusChanged={(status) => { props.setStatus(status) }}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.object,
  isProfileFetching: PropTypes.bool,
  isAuthorizedProfile: PropTypes.bool,
  isAuth: PropTypes.bool,
  userId: PropTypes.number,
  status: PropTypes.string,
  match: PropTypes.object,
  authUserData: PropTypes.object,
  getUserProfile: PropTypes.func,
  setUserId: PropTypes.func,
  setStatus: PropTypes.func,
  setIsAuthorizedProfile: PropTypes.func,
  getAuthUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  isProfileFetching: getIsProfileFetching(state),
  authUserData: getAuthUserData(state),
  userId: getUserId(state),
  status: getStatus(state),
  isAuthorizedProfile: getIsAuthorizedProfile(state),
  isAuth: getIsAuth(state)
})

export default compose(
  connect(mapStateToProps, {
    setStatus,
    setUserId,
    setIsAuthorizedProfile,
    getUserProfile: getUserProfileThunkCreator,
    getAuthUser: getAuthUserProfileThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileContainer)
