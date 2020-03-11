import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const Follow = ({ userId, followed, followingInProgress, follow, unfollow }) => {
  const isFollowingInProgress = followingInProgress.some(id => id === userId)
  return (
    <div>
      {followed
        ? <Button color='info' disabled={isFollowingInProgress} onClick={() => { unfollow(userId) }}> Unfollow </Button>
        : <Button color='info' disabled={isFollowingInProgress} onClick={() => { follow(userId) }}> Follow </Button>}
    </div>)
}

Follow.propTypes = {
  userId: PropTypes.number,
  followed: PropTypes.bool,
  followingInProgress: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func
}

export default Follow
