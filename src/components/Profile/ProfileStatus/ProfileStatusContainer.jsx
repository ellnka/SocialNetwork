import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUserProfileStatusThunkCreator, changeUserProfileStatusThunkCreator } from '../../../redux/profile-reducer'
// import withAuthRedirect from '../hoc/withAuthRedirect'
import ProfileStatus from './ProfileStatus'

const ProfileStatusContainer = (props) => {
  useEffect(() => {
    props.authUserData && props.authUserData.id && props.getStatus(props.authUserData.id)
  }, [props.authUserData])

  return (
    <ProfileStatus
      userData={props.authUserData}
      status={props.status}
      onStatusChanged={(status) => { props.changeStatus(status) }}
    />
  )
}

ProfileStatusContainer.propTypes = {
  status: PropTypes.string,
  authUserData: PropTypes.object,
  getStatus: PropTypes.func,
  changeStatus: PropTypes.func
}

const mapStateToProps = (state) => ({
  authUserData: state.auth.userData,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {
    getStatus: getUserProfileStatusThunkCreator,
    changeStatus: changeUserProfileStatusThunkCreator
  }),
  withRouter
// withAuthRedirect
)(ProfileStatusContainer)
