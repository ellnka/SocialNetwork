import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  followThunkCreator,
  unfollowThunkCreator
} from '../../../redux/profile-reducer'
import { getIsFollowStatusFetching } from '../../../redux/profile-selector'
import Follow from './Follow'

const FollowContainer = ({
  userId, followed, isFollowedStatusFetching, follow, unfollow
}) => (
  <div>
    <Follow
      userId={userId}
      followed={followed}
      followingInProgress={isFollowedStatusFetching ? [userId] : []}
      follow={follow}
      unfollow={unfollow}
    />
  </div>)

FollowContainer.propTypes = {
  userId: PropTypes.number,
  followed: PropTypes.bool,
  isFollowedStatusFetching: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func
}

const mapStateToProps = (state) => ({
  isFollowedStatusFetching: getIsFollowStatusFetching(state)
})

export default connect(
  mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator
  })(FollowContainer)
