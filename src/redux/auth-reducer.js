import API from './../services/api'
import { stopSubmit } from 'redux-form'

export const LOGIN_FORM_NAME = 'login'

export const SET_USER_DATA = 'auth/SET-USER-DATA'
export const SET_IS_AUTH = 'auth/SET-IS-AUTH'
export const SET_IS_FETCHING = 'auth/SET-IS-FETCHING'

export const setUserData = data => ({ type: SET_USER_DATA, data })
export const setIsAuth = isAuth => ({ type: SET_IS_AUTH, isAuth })
export const setAuthIsFetching = isAuth => ({ type: SET_IS_AUTH, isAuth })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })

const initState = {
  userData: null,
  isAuth: false,
  isFetching: false
}

const getAuthUser = async (dispatch) => {
  dispatch(setIsFetching(true))
  try {
    const response = await API.getAuthUser()
    const resultCode = response.data && response.data.resultCode
    if (resultCode === 0) {
      dispatch(setUserData({ userData: response.data.data, isAuth: true }))
    } else {
      dispatch(setUserData({ userData: {}, isAuth: false }))
    }
  } finally {
    dispatch(setIsFetching(false))
  }
}

export const getAuthUserThunkCreator = () => (dispatch) => {
  getAuthUser(dispatch)
}

export const loginUserThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  dispatch(setIsFetching(true))

  const response = await API.loginUser(email, password, rememberMe)
  const resultCode = response.data && response.data.resultCode
  if (resultCode === 0) {
    getAuthUser(dispatch)
  } else {
    const error = response.data.messages.length ? response.data.messages[0] : 'Something wrong...'
    dispatch(stopSubmit(LOGIN_FORM_NAME, { _error: error }))
  }
}

export const logoutUserThunkCreator = () => async (dispatch) => {
  const response = await API.logoutUser()
  const resultCode = response.data.resultCode
  if (resultCode === 0) {
    dispatch(setUserData({ userData: null, isAuth: false }))
  }
}

const authReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data }
    }
    case SET_IS_AUTH: {
      return { ...state, isAuth: action.isAuth }
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state
  }
}

export default authReducer
