export const getUserProfile = (state) => state.profilePage.userProfile
export const getUserId = (state) => +state.profilePage.userId
export const getStatus = (state) => state.profilePage.status
export const getIsOwner = (state) => state.profilePage.isOwner
export const getIsAuth = (state) => state.auth.isAuth
export const getFollowed = (state) => state.profilePage.followed

export const getIsProfileFetching = (state) => state.profilePage.isProfileFetching
export const getIsUpdating = (state) => state.profilePage.isUpdating
export const getIsEdited = (state) => state.profilePage.isEdited
export const getIsFollowStatusFetching = (state) => state.profilePage.isFollowStatusFetching
