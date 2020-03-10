import API from '../services/api'

export const SET_USERS = 'users/SET-USERS'
export const SET_TOTAL_USER_COUNT = 'users/SET-TOTAL-USER-COUNT'
export const SET_PAGE_COUNT = 'users/SET-PAGE-COUNT'
export const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
export const SET_IS_FETCHING = 'users/SET-IS-FETCHING'

export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalUserCount = totalUserCount => ({ type: SET_TOTAL_USER_COUNT, totalUserCount })
export const setPageCount = pageCount => ({ type: SET_PAGE_COUNT, pageCount })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })

const initState = {
  users: [],
  pageSize: 50,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false
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
    default:
      return state
  }
}

export default usersReducer
