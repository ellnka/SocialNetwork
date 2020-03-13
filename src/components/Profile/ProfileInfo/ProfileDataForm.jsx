import React from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'reactstrap'
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators'
import { EDIT_PROFILE_FORM_NAME } from '../../../redux/profile-reducer'
import ContactInput from './ContactInput'
import { createInputField } from '../../common/FormControls/FormControls'

const minLength = minLengthCreator(5)
const maxLength = maxLengthCreator(30)

const ProfileDataForm = ({ userProfile, handleSubmit }, ...props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Button type='submit'>Save</Button>
      <div>
        <hr />
        <h2 className='h4'>
          {createInputField('Full Name', 'fullName', [required, minLength, maxLength], { type: 'input' })}
        </h2>
        <hr />
        <Row className=''>
          <Col>
            <div className='form-row'>
              <label htmlFor='lookingForAJob' className='form-label mr-2'>Looking for a job: </label>
              <div className=''>{createInputField('Looking for a job', 'lookingForAJob', [], { type: 'checkbox' })}</div>
            </div>
            <div className=''>
              <label htmlFor='lookingForAJobDescription' className='form-label mr-2'>Job Description: </label>
              {/*  <Field validate={[required, minLength, maxLength]} value={userProfile.lookingForAJobDescription} /> */}
              {createInputField('Job Description', 'lookingForAJobDescription', [], { type: 'textarea' })}
            </div>
          </Col>
        </Row>
        <hr />
        <Row className='text-center m-b'>
          <Col>
            <label htmlFor='jobDescription' className='form-label mr-2'>About Me: </label>
            {/*  <Field validate={[required, minLength, maxLength]} value={userProfile.aboutMe} /> */}
            {createInputField('About me', 'aboutMe', [], { type: 'textarea' })}
          </Col>
        </Row>
        {Object.keys(userProfile.contacts).map((key) => <ContactInput title={key} key={key} value={userProfile.contacts[key]} />)}
      </div>
    </form>
  )
}

ProfileDataForm.propTypes = {
  userProfile: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: EDIT_PROFILE_FORM_NAME })(ProfileDataForm)
