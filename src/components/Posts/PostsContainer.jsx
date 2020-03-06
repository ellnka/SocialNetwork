import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Container } from 'reactstrap'
import {
  getPostsThunkCreator
} from '../../redux/posts-reducer'
import Preloader from '../common/Preloader/Preloader'
import NewPostContainer from './NewPost/NewPostContainer.jsx'
import Posts from './Posts'

const PostsContainer = (props) => {
  useEffect(() => { props.requestPosts() }, [])

  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <NewPostContainer />
          {props.arePostsFetching ? <Preloader /> : null}
          <Posts posts={props.posts} />
        </Col>
      </Row>
    </Container>
  )
}

PostsContainer.propTypes = {
  posts: PropTypes.array,
  arePostsFetching: PropTypes.bool,
  requestPosts: PropTypes.func
}

const mapStateToProps = (state) => ({
  posts: state.postsPage.posts,
  arePostsFetching: state.postsPage.arePostsFetching
})

export default connect(mapStateToProps, { requestPosts: getPostsThunkCreator })(PostsContainer)
