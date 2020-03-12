import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

const Contact = ({ title, value }) => (
  <Row className='text-left m-b'>
    <Col>
      <div className='h5 text-muted'> <b>{title} </b> : {value}</div>
    </Col>
  </Row>)

Contact.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

export default Contact
