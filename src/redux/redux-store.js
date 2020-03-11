import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleWare from 'redux-thunk'
import { reducer as FormReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
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

// const store = createStore(reducers, applyMiddleware(ThunkMiddleWare))

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ThunkMiddleWare)
  // other store enhancers if any
))
window.reduxStore = store
export default store
