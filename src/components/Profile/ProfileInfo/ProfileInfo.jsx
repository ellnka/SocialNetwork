import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'reactstrap'
import avatar from '../../../imgs/avatar.png'
import ProfileStatusContainer from './../ProfileStatus/ProfileStatusContainer'
import FollowContainer from '../../common/Follow/FollowProfileContainer'

const ProfileInfo = ({ userProfile, isAuthorizedProfile, isAuth, followed }) => {
  return (
    <Card body>
      <div className='text-center'>
        <div className='m-b'>
          <img src={userProfile.photos.large || avatar} style={{ width: 100 }} className='b-circle' alt='profile' />
        </div>
        <div>
          <h2 className='h4'>{userProfile.fullName}</h2>
          <div className='h5 text-muted'>{userProfile.aboutMe}</div>
          <hr />
          <div className='p text-muted'>{isAuthorizedProfile && <ProfileStatusContainer />}</div>
          {/*         <Row className='text-center m-b'>
            <Col>
              <strong>230</strong>
              <div className='text-muted'>Followers</div>
            </Col>
            <Col>
              <strong>325</strong>
              <div className='text-muted'>Following</div>
            </Col>
          </Row> */}
          {!isAuthorizedProfile && isAuth && <FollowContainer userId={userProfile.userId} followed={followed} />}
        </div>
      </div>
    </Card>
  )
}

ProfileInfo.propTypes = {
  userProfile: PropTypes.object,
  isAuth: PropTypes.bool,
  isAuthorizedProfile: PropTypes.bool,
  followed: PropTypes.bool
}

export default ProfileInfo
