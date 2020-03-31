import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getDialogsThunkCreator, getActiveDialogThunkCreator } from './../../redux/messages-reducer'
import { Loader } from 'react-feather'
import DialogsList from './DialogsList/DialogsList'
import Dialog from './Dialog/Dialog'
import style from './Messages.module.css'
import NewMessageContainer from './NewMessage/NewMessageContainer'
// import withAuthRedirect from '../hoc/withAuthRedirect'

const MessagesContainer = ({ areLoading, isLoading, messages, dialogs, match, getDialogs, getActiveDialog }) => {
  React.useEffect(() => {
    if (!match.params.userId) {
      getDialogs()
    } else {
      getActiveDialog(match.params.userId)
    }
  }, [match.params.userId])
  if (!areLoading) {
    return (
      <div className={style.messages}>
        <DialogsList dialogs={dialogs} />
        <div>
          <Dialog messages={{ ...messages }} isLoading={isLoading} />
          <NewMessageContainer />
        </div>
      </div>)
  } else {
    return <Loader />
  }
}

MessagesContainer.propTypes = {
  messages: PropTypes.object,
  dialogs: PropTypes.array,
  isLoading: PropTypes.bool,
  areLoading: PropTypes.bool,
  match: PropTypes.object,
  getDialogs: PropTypes.func,
  getActiveDialog: PropTypes.func
}

const mapStateToProps = (state) => ({
  areLoading: state.messagesPage.areDialogsLoading,
  isLoading: state.messagesPage.isDialogLoading,
  messages: state.messagesPage.messages,
  dialogs: state.messagesPage.dialogs
})

export default compose(
  connect(mapStateToProps,
    {
      getDialogs: getDialogsThunkCreator,
      getActiveDialog: getActiveDialogThunkCreator
    }),
  withRouter
  // withAuthRedirect
)(MessagesContainer)
