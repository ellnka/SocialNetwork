import Axios from 'axios'

export const LOGIN = 'free@samuraijs.com'
export const PASSWORD = 'free'
export const PERSONAL_API_KEY = 'd03460cc-dd7f-425e-86ff-ef080fabbdfa'
export const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'
export const API_KEY = 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
export const POSTS_URL = 'https://api.myjson.com/bins/gkloi'

const instance = Axios.create(
  {
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
      'API-KEY': PERSONAL_API_KEY
    }
  }
)

export default class API {
  static getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  }

  static getAuthUser () {
    return instance.get('auth/me')
  }

  static loginUser (email, password, rememberMe) {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe
    })
  }

  static logoutUser () {
    return instance.delete('auth/login')
  }

  static getUserProfile (userId) {
    return instance.get(`profile/${userId}`)
  }

  static putUserProfile (data) {
    return instance.put('profile', data)
  }

  static putUserPhoto (photo) {
    // eslint-disable-next-line no-undef
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put('profile/photo', formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  }

  static getUserProfileStatus (userId) {
    return instance.get(`profile/status/${userId}`)
  }

  static putUserProfileStatus (status) {
    return instance.put('profile/status/', { status })
  }

  static getUserFollow (userId) {
    return instance.get(`follow/${userId}`)
  }

  static postUserFollow (userId) {
    return instance.post(`follow/${userId}`, { userId })
  }

  static deleteUserFollow (userId) {
    return instance.delete(`follow/${userId}`, { userId })
  }

  static getDialogs () {
    return instance.get('dialogs')
  }

  static getDialog (userId) {
    return instance.get(`dialogs/${userId}/messages`)
  }

  static postMessage (userId, body) {
    return instance.post(`dialogs/${userId}/messages`, { body })
  }

  static getPosts () {
    return Axios.get(POSTS_URL)
  }

  static putPosts (data) {
    return Axios.put(POSTS_URL, { data })
  }
}
