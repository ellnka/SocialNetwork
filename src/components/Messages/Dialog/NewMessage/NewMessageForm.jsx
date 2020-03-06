import React from 'react'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import TextArea from './../../../common/FormControls/TextArea'
import { required, maxLengthCreator, minLengthCreator } from './../../../../utils/validators/validators'
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
          <Field
            component={TextArea}
            validate={[required, maxLength, minLength]}
            className='form-control'
            placeholder='Write your message...'
            name='newMessage'
          />
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
