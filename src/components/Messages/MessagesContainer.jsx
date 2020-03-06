import Messages from './Messages'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import withAuthRedirect from '../hoc/withAuthRedirect'

export default compose(
  connect(null, {})
  // withRouter
  // withAuthRedirect
)(Messages)
