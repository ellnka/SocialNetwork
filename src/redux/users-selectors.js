// import { createSelector } from 'reselect'

export const getUsers = (state) => state.usersPage.users
export const getPageSize = (state) => state.usersPage.pageSize
export const getTotalUserCount = (state) => state.usersPage.totalUserCount
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getIsFetching = (state) => state.usersPage.isFetching
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress

// export const getUsersSuper = createSelector(getUsers, getIsFetching, (users, isFetching) => users.map(u => u))
