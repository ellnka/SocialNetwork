import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
// import './App.css'
import './scss/styles.scss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeThunkCreator } from './redux/app-reducer'
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import PostsContainer from './components/Posts/PostsContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component {
  componentDidMount () {
    this.props.initialize()
  }

  render () {
    if (!this.props.isInit) return <Preloader />

    return (
      <div className='app-body'>
        <NavbarContainer />
        <div className='page-content'>
          <HeaderContainer />
          <div className='primary-content' role='main' tabIndex='-1'>
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/profile/:userId' render={() => <ProfileContainer />} />
            <Route path='/myprofile/' render={() => <ProfileContainer />} />
            <Route path='/posts' render={() => <PostsContainer />} />
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  isInit: PropTypes.bool,
  initialize: PropTypes.func
}

const mapStateToProps = (state) => ({
  isInit: state.app.isInit
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize: initializeThunkCreator }))(App)
