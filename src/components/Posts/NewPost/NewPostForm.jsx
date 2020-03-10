import React from 'react'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import { Button, Card, CardBody, CardFooter } from 'reactstrap'
import { required, maxLengthCreator, minLengthCreator } from './../../../utils/validators/validators'
import TextArea from './../../common/FormControls/TextArea'
import { NEW_POST_FORM_NAME } from './../../../redux/posts-reducer'

const minLength = minLengthCreator(5)
const maxLength = maxLengthCreator(30)

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Card>
        <CardBody>
          <Field
            component={TextArea}
            name='newPostMessage'
            className='form-control'
            placeholder='Write your post message...'
            validate={[required, maxLength, minLength]}
          />
        </CardBody>
        <CardFooter>
          <Button color='primary' className='pull-right'>
            Post
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

NewPostForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: NEW_POST_FORM_NAME })(NewPostForm)
