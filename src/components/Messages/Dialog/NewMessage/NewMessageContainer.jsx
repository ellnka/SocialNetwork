import React from 'react'
import NewMessageForm from './NewMessageForm'
import PropTypes from 'prop-types'
import { sendMessageThunkCreator } from '../../../../redux/messages-reducer'
import { connect } from 'react-redux'

const NewMessageContainer = (props) => {
  const handleNewMessageSubmit = (values) => {
    props.sendMessage(values.newMessage)
  }

  return <NewMessageForm onSubmit={handleNewMessageSubmit} />
}

NewMessageContainer.propTypes = {
  sendMessage: PropTypes.func
}

export default connect(null, { sendMessage: sendMessageThunkCreator })(NewMessageContainer)
