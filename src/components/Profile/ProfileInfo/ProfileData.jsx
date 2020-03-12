import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'reactstrap'
import Contact from './Contact'

const ProfileData = ({ userProfile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && <Button onClick={activateEditMode}>Edit</Button>}
      <h2 className='h4'>{userProfile.fullName}</h2>
      <hr />
      <Row className='text-center m-b'>
        {userProfile.lookingForAJob &&
          <Col>
            <div className='h5 text-muted'>Looking for a job: </div>
            <div>{userProfile.lookingForAJobDescription}</div>
          </Col>}
      </Row>
      <Row className='text-center m-b'>
        <Col>
          <div className='h5 text-muted'>About Me: </div>
          <div>{userProfile.aboutMe}</div>
        </Col>
      </Row>
      {Object.keys(userProfile.contacts).map((key) => <Contact title={key} key={key} value={userProfile.contacts[key]} />)}
    </div>
  )
}

ProfileData.propTypes = {
  userProfile: PropTypes.object,
  isOwner: PropTypes.bool,
  activateEditMode: PropTypes.func
}

export default ProfileData
