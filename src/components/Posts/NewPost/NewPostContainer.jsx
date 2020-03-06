import React from 'react'
import NewPostForm from './NewPostForm'
import PropTypes from 'prop-types'
import {
  addNewPostThunkCreator
} from '../../../redux/posts-reducer'
import { connect } from 'react-redux'

const NewPostContainer = (props) => {
  const handlePostMessage = (values) => {
    props.addPost(values.newPostMessage)
  }

  return <NewPostForm onSubmit={handlePostMessage} />
}

NewPostContainer.propTypes = {
  addPost: PropTypes.func
}

export default connect(null, { addPost: addNewPostThunkCreator })(NewPostContainer)
