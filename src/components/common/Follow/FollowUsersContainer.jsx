import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  followThunkCreator,
  unfollowThunkCreator
} from '../../../redux/users-reducer'
import { getFollowingInProgress } from '../../../redux/users-selectors'
import Follow from './Follow'

const FollowContainer = ({
  userId, followed, followingInProgress, follow, unfollow
}) => (
  <div>
    <Follow
      userId={userId}
      followed={followed}
      followingInProgress={followingInProgress}
      follow={follow}
      unfollow={unfollow}
    />
  </div>)

FollowContainer.propTypes = {
  userId: PropTypes.number,
  followed: PropTypes.bool,
  followingInProgress: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func
}

const mapStateToProps = (state) => ({
  followingInProgress: getFollowingInProgress(state)
})

export default connect(
  mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator
  })(FollowContainer)
