import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addDialog } from '../../../redux/messages-reducer'
import SendMessage from './SendMessage'

const userProfileToUserDialog = (userProfile) => {
  return {
    id: userProfile.userId,
    userName: userProfile.fullName
  }
}

const SendMessageContainer = ({
  user, addDialog
}) => (
  <div>
    <SendMessage
      user={userProfileToUserDialog(user)}
      addDialog={addDialog}
    />
  </div>)

SendMessageContainer.propTypes = {
  user: PropTypes.object,
  addDialog: PropTypes.func
}

export default connect(null, { addDialog })(SendMessageContainer)
