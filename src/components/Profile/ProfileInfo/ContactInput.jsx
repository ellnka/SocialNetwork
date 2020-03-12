import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import { createInputField } from '../../common/FormControls/FormControls'

const ContactInput = ({ title, value }) => (
  <Row className='text-left m-b'>
    <Col>
      <div className='h5 text-muted'> <b>{title} </b> : {value}
        {createInputField(title, `contacts.${title}`, [], { type: 'input' })}
      </div>
    </Col>
  </Row>)

ContactInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

export default ContactInput
