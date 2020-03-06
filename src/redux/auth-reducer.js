import API from './../services/api'
import { stopSubmit } from 'redux-form'

export const SET_USER_DATA = 'auth/SET-USER-DATA'
export const SET_IS_AUTH = 'auth/SET-IS-AUTH'

export const setUserData = data => ({ type: SET_USER_DATA, data })
export const setIsAuth = isAuth => ({ type: SET_IS_AUTH, isAuth })

const initState = {
  userData: null,
  isAuth: false
}

const getAuthUser = (dispatch) => {
  API.getAuthUser().then(
    response => {
      const resultCode = response.data.resultCode
      if (resultCode === 0) {
        const userData = response.data && response.data.data
        dispatch(setUserData({ userData, isAuth: true }))
      }
    }
  )
}

export const getAuthUserThunkCreator = () => (dispatch) => {
  getAuthUser(dispatch)
}

export const loginUserThunkCreator = (email, password, rememberMe) => (dispatch) => {
  API.loginUser(email, password, rememberMe).then(
    response => {
      const resultCode = response.data.resultCode
      if (resultCode === 0) {
        getAuthUser(dispatch)
      } else {
        const error = response.data.messages.length ? response.data.messages[0] : 'Something wrong...'
        dispatch(stopSubmit('login', { _error: error }))
      }
    }
  )
}

export const logoutUserThunkCreator = () => (dispatch) => {
  API.logoutUser().then(
    response => {
      const resultCode = response.data.resultCode
      if (resultCode === 0) {
        dispatch(setUserData({ userData: null, isAuth: false }))
      }
    }
  )
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data }
    }
    case SET_IS_AUTH: {
      return { ...state, isAuth: action.isAuth }
    }
    default:
      return state
  }
}

export default authReducer
