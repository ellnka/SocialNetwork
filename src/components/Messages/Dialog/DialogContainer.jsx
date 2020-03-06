import Dialog from './Dialog'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  messages: state.messagesPage.messages
})

export default connect(mapStateToProps, null)(Dialog)
