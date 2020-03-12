
import API from './../services/api'
import { stopSubmit } from 'redux-form'
import { requestData } from './generic'

export const NEW_EDIT_PROFILE_FORM_NAME = 'profileDataForm'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_USER_ID = 'profile/SET-USER-ID'
const SET_IS_FETCHING = 'profile/SET-IS-FETCHING'
const SET_IS_UPDATING = 'profile/SET-IS-UPDATING'
const SET_STATUS = 'profile/SET-STATUS'
const SET_IS_FOLLOW_STATUS_FETCHING = 'profile/SET-IS-FOLLOW-STATUS-FETCHING'
const RESET_PROFILE = 'profile/RESET-PROFILE'
const FOLLOW = 'profile/FOLLOW'
const UNFOLLOW = 'profile/UNFOLLOW'

export const setUserProfile = userProfile => ({ type: SET_USER_PROFILE, userProfile })
export const setUserId = userId => ({ type: SET_USER_ID, userId })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })
export const setIsUpdating = isUpdating => ({ type: SET_IS_FETCHING, isUpdating })
export const setStatus = status => ({ type: SET_STATUS, status })
export const setIsFollowStatusFetching = isFollowStatusFetching => ({ type: SET_IS_FOLLOW_STATUS_FETCHING, isFollowStatusFetching })
export const resetProfile = () => ({ type: RESET_PROFILE })
export const setFollowed = (userId) => ({ type: FOLLOW, userId })
export const setUnfollowed = (userId) => ({ type: UNFOLLOW, userId })

const initState = {
  isProfileFetching: false,
  isUpdating: false,
  userProfile: {},
  userId: 2,
  followed: false,
  isFollowStatusFetching: false,
  status: ''
}

const _getUserProfile = async (userId, dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const response = await API.getUserProfile(userId)
    dispatch(setUserProfile(response.data))
    dispatch(setUserId(userId))
  } catch (error) {
    console.error('get profile error', error)
  } finally {
    dispatch(setIsFetching(false))
  }
}

const _getFollowStatus = async (userId, dispatch) => {
  dispatch(setIsFollowStatusFetching(true))
  try {
    const response = await API.getUserFollow(userId)
    if (response.data) {
      dispatch(setFollowed())
    } else {
      dispatch(setUnfollowed())
    }
  } finally {
    dispatch(setIsFollowStatusFetching(false))
  }
}

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  dispatch(resetProfile())
  _getUserProfile(userId, dispatch)
  _getFollowStatus(userId, dispatch)
}

export const getUserProfileStatusThunkCreator = (userId) => async (dispatch) => {
  try {
    const response = await API.getUserProfileStatus(userId)
    dispatch(setStatus(response.data))
  } catch (error) {
    console.error('get status error', error)
  }
}

export const changeUserProfileStatusThunkCreator = (status) => async (dispatch) => {
  try {
    await API.putUserProfileStatus(status)
    dispatch(setStatus(status))
  } catch (error) {
    console.error('put status', error)
  }
}

export const getAuthUserProfileThunkCreator = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  try {
    const response = await API.getAuthUser()
    if (response.data && response.data.resultCode === 0) {
      const userData = response.data && response.data.data
      _getUserProfile(userData.id, dispatch)
    }
  } finally {
    dispatch(setIsFetching(false))
  }
}

const getContactError = (error) => {
  const regExp = /(?<=->).+?(?=\))/g
  const errorContactField = error.match(regExp)
  if (errorContactField.length) {
    const obj = {}
    obj[errorContactField[0].toLowerCase()] = error
    return { contacts: obj }
  }
  return null
}

export const changeUserProfileThunkCreator = (data) => async (dispatch) => {
  dispatch(setIsUpdating(true))
  try {
    const response = await API.putUserProfile(data)
    if (response.data && response.data.resultCode === 0) {
      _getUserProfile(data.userId, dispatch)
    } else {
      // const error = response.data.messages.length ? response.data.messages[0] : 'Something wrong...'
      const errorArr = response.data && response.data.messages && response.data.messages.map(error => getContactError(error))
      dispatch(stopSubmit(NEW_EDIT_PROFILE_FORM_NAME, errorArr[0]))
    }
  } finally {
    dispatch(setIsUpdating(false))
  }
}

export const getUserFollowStatusThunkCreator = (userId) => (dispatch) => {
  _getFollowStatus(userId, dispatch)
}

export const followThunkCreator = (userId) => async (dispatch) => {
  requestData(dispatch, API.postUserFollow, setIsFollowStatusFetching, setFollowed, userId)
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  requestData(dispatch, API.deleteUserFollow, setIsFollowStatusFetching, setUnfollowed, userId)
}

const profileReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_IS_FETCHING: {
      return { ...state, isProfileFetching: action.isFetching }
    }
    case SET_IS_UPDATING: {
      return { ...state, isUpdating: action.isUpdating }
    }
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile }
    }
    case SET_USER_ID: {
      return { ...state, userId: action.userId }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case SET_IS_FOLLOW_STATUS_FETCHING: {
      return { ...state, isFollowStatusFetching: action.isFollowStatusFetching }
    }
    case FOLLOW: {
      return { ...state, followed: true }
    }
    case UNFOLLOW: {
      return { ...state, followed: false }
    }
    case RESET_PROFILE: {
      return { ...state, followed: false, userProfile: null, userId: null, status: null }
    }
    default:
      return state
  }
}

export default profileReducer
