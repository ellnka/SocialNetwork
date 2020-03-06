import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Button } from 'reactstrap'
import avatar from '../../../imgs/avatar.png'
import ProfileStatusContainer from './../ProfileStatus/ProfileStatusContainer'

const ProfileInfo = (props) => {
  return (
    <Card body>
      <div className='text-center'>
        <div className='m-b'>
          <img src={props.userProfile.photos.large || avatar} style={{ width: 100 }} className='b-circle' alt='profile' />
        </div>
        <div>
          <h2 className='h4'>{props.userProfile.fullName}</h2>
          <div className='h5 text-muted'>{props.userProfile.aboutMe}</div>
          <hr />
          <div className='p text-muted'>{props.isAuthorizedProfile && <ProfileStatusContainer status={props.status} onStatusChanged={props.onStatusChanged} />}</div>
          <Row className='text-center m-b'>
            <Col>
              <strong>230</strong>
              <div className='text-muted'>Followers</div>
            </Col>
            <Col>
              <strong>325</strong>
              <div className='text-muted'>Following</div>
            </Col>
          </Row>
          {!props.isAuthorizedProfile && <Button block>Follow</Button>}
        </div>
      </div>
    </Card>
  )
}

ProfileInfo.propTypes = {
  userProfile: PropTypes.object,
  isAuthorizedProfile: PropTypes.bool,
  status: PropTypes.string,
  onStatusChanged: PropTypes.func
}

export default ProfileInfo
