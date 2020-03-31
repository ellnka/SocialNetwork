import React from 'react'
import DialogMessage from './DialogMessage/DialogMessage'
import PropTypes from 'prop-types'

const Dialog = ({ messages }) => {
  const messageElements = messages.items.map((message, i) => (
    <DialogMessage id={message.id} text={message.body} key={message.id} />
  ))
  return (
    <div>
      {messageElements}
    </div>
  )
}

Dialog.propTypes = {
  messages: PropTypes.array
}

export default Dialog
