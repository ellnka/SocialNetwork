export const getUserProfile = (state) => state.profilePage.userProfile
export const getIsProfileFetching = (state) => state.profilePage.isProfileFetching
export const getAuthUserData = (state) => state.auth.userData
export const getUserId = (state) => +state.profilePage.userId
export const getStatus = (state) => state.profilePage.status
export const getIsAuthorizedProfile = (state) => state.profilePage.isAuthorizedProfile
export const getIsAuth = (state) => state.auth.isAuth
export const getIsAuthFetching = (state) => state.auth.isFetching
