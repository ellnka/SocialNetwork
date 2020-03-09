
import moment from 'moment'
import API from '../services/api'
import {reset} from 'redux-form'

export const SET_POSTS = 'posts/SET-POSTS'
export const ADD_POST = 'posts/ADD-POST'
export const EDIT_NEW_POST = 'posts/EDIT-NEW-POST'
export const SET_IS_FETCHING = 'posts/SET-IS-FETCHING'

export const setPosts = posts => ({ type: SET_POSTS, posts })
export const addPost = post => ({ type: ADD_POST, post })
export const editPost = post => ({ type: EDIT_NEW_POST, post })
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching })

const initState = {
  posts: [],
  arePostsFetching: false
}

export const getPostsThunkCreator = (userId = 1) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const response = await API.getPosts()
  if (response.data && response.data.data) {
    dispatch(setIsFetching(false))
    const posts = response.data.data.posts
    dispatch(setPosts({ posts }))
  }
}

export const addNewPostThunkCreator = (text, userId = 1) => (dispatch) => {
  dispatch(setIsFetching(true))
  API.getPosts().then(
    response => {
      const posts = response.data.data.posts
      const newPost = {
        id: posts.length, 
        text,
        datetime: moment().format('YYYY-MM-DD HH:mm')
      }
      const requestData =
        {
          userId,
          posts: [...posts, newPost]
        }
      API.postPosts(requestData).then(
        response => {
          dispatch(setIsFetching(false))
          const posts = response.data.data.posts
          dispatch(setPosts({ posts }))
          dispatch(reset('profileNewPost'))
        }
      )
    }
  )
}

export const deletePostThunkCreator = (postId, userId = 1) => async (dispatch) => {
  let posts = null
  dispatch(setIsFetching(true))
  let response = await API.getPosts()
  if (response.data && response.data.data) {
    posts = response.data.data.posts
    posts = posts.filter((post) => post.id !== postId)
  }
  if (posts) {
    const requestData = {
      userId,
      posts
    }
    response = await API.postPosts(requestData)
    dispatch(setIsFetching(false))
    if (response.data && response.data.data) {
      const refreshedPosts = response.data.data.posts
      dispatch(setPosts({ posts: refreshedPosts }))
    }
  }
}

const postsReducer = (state = initState, action) => {
  const stateCopy = { ...state }
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        ...action.posts
      }
    }
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length, text: action.post }]
      }
    }
    case EDIT_NEW_POST: {
      stateCopy.newPostText = action.post.text
      return stateCopy
    }
    case SET_IS_FETCHING: {
      return { ...state, arePostsFetching: action.isFetching }
    }
    default:
      return state
  };
}

export default postsReducer
