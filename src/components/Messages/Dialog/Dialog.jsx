import React from 'react'
import DialogMessage from './DialogMessage/DialogMessage'
import NewMessageContainer from './NewMessage/NewMessageContainer'
import PropTypes from 'prop-types'

const Dialog = (props) => {
  const messageElements = props.messages.map((message, i) => (
    <DialogMessage id={message.id} text={message.text} key={i} />
  ))
  return (
    <div>
      {messageElements}
      <NewMessageContainer />
    </div>
  )
}

Dialog.propTypes = {
  messages: PropTypes.array
}

export default Dialog
