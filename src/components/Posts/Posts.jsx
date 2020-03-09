import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'

const Posts = (props) => {
  if (!props.posts) return null
  let posts = [...props.posts]
  posts = posts.reverse().map((post, i) => (
    <Post post={post} deletePost={props.deletePost} key={i} />
  ))
  return (
    <div>
      {posts}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  deletePost: PropTypes.func
}

export default Posts
