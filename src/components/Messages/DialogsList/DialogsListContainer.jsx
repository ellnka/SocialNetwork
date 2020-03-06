import DialogsList from './DialogsList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs
})

export default connect(mapStateToProps, null)(DialogsList)
