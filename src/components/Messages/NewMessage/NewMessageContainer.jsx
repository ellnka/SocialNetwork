import React from 'react'
import NewMessageForm from './NewMessageForm'
import PropTypes from 'prop-types'
import { sendMessageThunkCreator } from '../../../redux/messages-reducer'
import { connect } from 'react-redux'

const NewMessageContainer = ({ userId, sendMessage }) => {
  const handleNewMessageSubmit = (values) => {
    sendMessage(userId, values.newMessage)
  }

  return <NewMessageForm onSubmit={handleNewMessageSubmit} />
}

NewMessageContainer.propTypes = {
  userId: PropTypes.number,
  sendMessage: PropTypes.func
}

export default connect((state) => ({ userId: state.messagesPage.activeId }), { sendMessage: sendMessageThunkCreator })(NewMessageContainer)
