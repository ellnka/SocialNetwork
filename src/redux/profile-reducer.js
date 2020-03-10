
import API from './../services/api'

export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_USER_ID = 'profile/SET-USER-ID'
export const SET_IS_FETCHING = 'profile/SET-IS-FETCHING'
export const SET_IS_AUTHORIZED_PROFILE = 'profile/SET-IS-AUTHORIZED-PROFILE'
export const SET_STATUS = 'profile/SET-STATUS'

export const setUserProfile = userProfile => ({ type: SET_USER_PROFILE, userProfile })
export const setUserId = userId => ({ type: SET_USER_ID, userId })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })
export const setIsAuthorizedProfile = isAuthorizedProfile => ({ type: SET_IS_AUTHORIZED_PROFILE, isAuthorizedProfile })
export const setStatus = status => ({ type: SET_STATUS, status })

const initState = {
  isProfileFetching: false,
  userProfile: {},
  userId: 2,
  isAuthorizedProfile: false,
  status: ''
}

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const response = await API.getUserProfile(userId)
    dispatch(setUserProfile(response.data))
  } catch (error) {
    console.error('get profile error', error)
  } finally {
    dispatch(setIsFetching(false))
  }
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
    if (response.data) {
      const resultCode = response.data.resultCode
      if (resultCode === 0) {
        const userData = response.data && response.data.data
        getUserProfileThunkCreator(userData.id)(dispatch)
        dispatch(setIsAuthorizedProfile(!!userData.id))
      }
    }
  } finally {
    dispatch(setIsFetching(false))
  }
}

const profileReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_IS_FETCHING: {
      return { ...state, isProfileFetching: action.isFetching }
    }
    case SET_IS_AUTHORIZED_PROFILE: {
      return { ...state, isAuthorizedProfile: action.isAuthorizedProfile }
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
    default:
      return state
  }
}

export default profileReducer