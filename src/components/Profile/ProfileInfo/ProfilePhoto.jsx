/* eslint-disable no-trailing-spaces */
import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'

const ProfilePhoto = ({ userId, changePhoto }) => {
  const handlePholoSelected = (e) => {
    if (!e.target.files.length) return null
    changePhoto(userId, e.target.files[0])
  }
  return (
    <Row className='text-center m-b'>
      <div className='uploader-body'>
        <label className='uploader-label' htmlFor='apply'>
          <input className='uploader-input' type='file' name='profilePhoto' id='apply' accept='image/*,.pdf' onChange={handlePholoSelected} />
          Change Photo
        </label>
      </div>
    </Row>)
}
ProfilePhoto.propTypes = {
  userId: PropTypes.number,
  changePhoto: PropTypes.func
}

export default ProfilePhoto
