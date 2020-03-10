
import moment from 'moment'
import API from '../services/api'
import { reset } from 'redux-form'

export const NEW_POST_FORM_NAME = 'profileNewPost'

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

const createNewPost = (text) => ({
  id: `f${(+(new Date())).toString(16)}`,
  text,
  datetime: moment().format('YYYY-MM-DD HH:mm')
})

const putPosts = async (dispatch, data, formName) => {
  try {
    const response = await API.putPosts(data)
    dispatch(setIsFetching(false))
    const posts = response.data.data.posts
    dispatch(setPosts({ posts }))
    if (formName) {
      dispatch(reset(formName))
    }
  } catch (error) {
    console.error('put posts error', error)
  }
}

const getPosts = async (dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const response = await API.getPosts()
    let posts = []
    if (response.data && response.data.data) {
      dispatch(setIsFetching(false))
      posts = response.data.data.posts
    }
    return posts
  } catch (error) {
    console.error('get posts error', error)
    return null
  }
}

export const getPostsThunkCreator = (userId = 1) => async (dispatch) => {
  const posts = await getPosts(dispatch)
  dispatch(setPosts({ posts }))
}

export const addNewPostThunkCreator = (text, userId = 1) => async (dispatch) => {
  const posts = await getPosts(dispatch)
  if (posts) {
    putPosts(dispatch, { userId, posts: [...posts, createNewPost(text)] }, NEW_POST_FORM_NAME)
  }
}

export const deletePostThunkCreator = (postId, userId = 1) => async (dispatch) => {
  let posts = await getPosts(dispatch)
  if (posts) {
    posts = posts.filter((post) => post.id !== postId)
    putPosts(dispatch, { userId, posts: [...posts] })
  }
}

const postsReducer = (state = initState, action = {}) => {
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
  }
}

export default postsReducer
