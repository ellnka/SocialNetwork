import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleWare from 'redux-thunk'
import { reducer as FormReducer } from 'redux-form'
import profileReducer from './profile-reducer'
import navbarReducer from './navbar-reducer'
import postsReducer from './posts-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  postsPage: postsReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  navbarPage: navbarReducer,
  auth: authReducer,
  app: appReducer,
  form: FormReducer
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleWare))
window.reduxStore = store
export default store
