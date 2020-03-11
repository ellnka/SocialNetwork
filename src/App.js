import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
// import './App.css'
import './scss/styles.scss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeThunkCreator } from './redux/app-reducer'
import { withSuspense } from './components/hoc/withSuspense'
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/common/Preloader/Preloader'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const PostsContainer = React.lazy(() => import('./components/Posts/PostsContainer'))
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount () {
    this.props.initialize()
  }

  render () {
    if (!this.props.isInit) {
      return <Preloader />
    }

    return (
      <React.Suspense fallback={<Preloader />}>
        <div className='app-body'>
          <NavbarContainer />
          <div className='page-content'>
            <HeaderContainer />
            <div className='primary-content' role='main' tabIndex='-1'>
              <Route path='/login' render={() => <LoginContainer />} />
              <Route path='/profile/:userId' render={withSuspense(ProfileContainer)} />
              <Route path='/myprofile/' render={withSuspense(ProfileContainer)} />
              <Route path='/posts' render={withSuspense(PostsContainer)} />
              <Route path='/messages' render={withSuspense(MessagesContainer)} />
              <Route path='/users' render={() => withSuspense(UsersContainer)} />
            </div>
          </div>
        </div>
      </React.Suspense>
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
