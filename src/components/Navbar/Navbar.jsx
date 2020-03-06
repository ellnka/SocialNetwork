import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavbarLogo from './NavbarLogo'
import NavbarSpacer from './NavbarSpacer'
import NavbarItem from './NavbarItem'

// const LOGO = './../../imgs/logo.png'
const LOGO = 'https://www.freelogodesign.org/Content/img/logo-ex-7.png'
const LOGO_TEXT = 'this is a logo'

class Navbar extends Component {
  constructor (props) {
    super()
    this.state = {
      menu: props.menu
    }
  }

  render () {
    const items = this.state.menu.items.map((item, i) => (
      <div key={i}>
        <NavbarItem item={item} />
        <NavbarSpacer />
      </div>
    ))
    return (
      <nav className='app-sidebar'>
        <NavbarLogo logo={LOGO} logoText={LOGO_TEXT} />
        {items}
      </nav>
    )
  }
};

Navbar.propTypes = {
  menu: PropTypes.object
}

const mapStateToProps = (state) => ({
  menu: state.navbarPage.menu
})

export default connect(mapStateToProps, null)(Navbar)
