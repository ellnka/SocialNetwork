import Navbar from './Navbar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  menu: state.navbarPage.menu
})

export default connect(mapStateToProps, null)(Navbar)
