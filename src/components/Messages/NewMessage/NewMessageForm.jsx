import React from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { createInputField } from './../../common/FormControls/FormControls'
import { required, maxLengthCreator, minLengthCreator } from './../../../utils/validators/validators'
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'

const maxLength = maxLengthCreator(30)
const minLength = minLengthCreator(5)

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Card>
        <CardHeader>
          <div className='m-r-sm inline-block'>
            <h5 className='inline m-b-none m-t-none'>Message: </h5>
          </div>
        </CardHeader>
        <CardBody>
          {createInputField('Write your message...', 'newMessage', [required, maxLength, minLength], { type: 'textarea' })}
        </CardBody>
        <CardFooter>
          <Button color='primary' className='pull-right'>
            Send
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

NewMessageForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({ form: 'dialogNewMessage' })(NewMessageForm)
