import API from '../services/api'
import { updateObjectInArrayByValue } from './../utils/helpers/objects'
import { requestData } from './generic'

const SET_USERS = 'users/SET-USERS'
const SET_TOTAL_USER_COUNT = 'users/SET-TOTAL-USER-COUNT'
const SET_PAGE_COUNT = 'users/SET-PAGE-COUNT'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_IS_FETCHING = 'users/SET-IS-FETCHING'
const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_IS_FOLLOWING_PROGRESS = 'users/SET_IS_FOLLOWING_PROGRESS'

export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalUserCount = totalUserCount => ({ type: SET_TOTAL_USER_COUNT, totalUserCount })
export const setPageCount = pageCount => ({ type: SET_PAGE_COUNT, pageCount })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })
export const setIsFollowingProgress = (isFetching, userId) => ({ type: SET_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const setFollow = (userId) => ({ type: FOLLOW, userId })
export const setUnfollow = (userId) => ({ type: UNFOLLOW, userId })

const initState = {
  users: [],
  pageSize: 50,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true))
  dispatch(setUsers([]))
  dispatch(setTotalUserCount(0))

  const response = await API.getUsers(currentPage, pageSize)
  if (response.data) {
    const totalUserCount = response.data.totalCount || 0
    const pageCount = Math.ceil(totalUserCount / pageSize)

    dispatch(setUsers(response.data.items))
    dispatch(setTotalUserCount(totalUserCount))
    dispatch(setPageCount(pageCount))
    dispatch(setCurrentPage(currentPage))
    dispatch(setIsFetching(false))
  }
}

export const followThunkCreator = (userId) => async (dispatch) => {
  requestData(dispatch, API.postUserFollow, setIsFollowingProgress, setFollow, userId)
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  requestData(dispatch, API.deleteUserFollow, setIsFollowingProgress, setUnfollow, userId)
}

const usersReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_TOTAL_USER_COUNT: {
      return { ...state, totalUserCount: action.totalUserCount }
    }
    case SET_PAGE_COUNT: {
      return { ...state, pageCount: action.pageCount }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrayByValue(state.users, action.userId, 'id', { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrayByValue(state.users, action.userId, 'id', { followed: false })
      }
    case SET_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
}

export default usersReducer
