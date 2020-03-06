import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'

const Posts = (props) => {
  const posts = props.posts.reverse().map((post, i) => (
    <Post message={post.text} key={i} />
  ))
  return (
    <div>
      {posts}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
