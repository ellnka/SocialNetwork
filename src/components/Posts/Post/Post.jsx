import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
// import Avatar from '../../common/Avatar/Avatar'
import { Card, CardBody, CardHeader } from 'reactstrap'

const Post = (props) => {
  return (
    <Card>
      <CardHeader>
        <div className='m-r-sm inline-block'>
          <div className='avatar avatar-base bg-blue'>
            <div className='user-initials'>M</div>
          </div>
        </div>
        <div className='m-l-sm inline-block'>
          <span> {moment(props.post.datetime, "YYYY-MM-DD HH:mm").fromNow()}</span>
        </div>
        <button className='btn btn-danger btn-sm float-right' onClick={() => {props.deletePost(props.post.id)}}>X</button>
      </CardHeader>
      <CardBody>
        <div>
          <h3>{props.post.text}</h3>
        </div>
      </CardBody>
      {/*         <CardFooter>
          <div className='display-flex'>
            <Avatar initials='JS' color='orange' />
            <input type='text' className='form-control m-l' />
          </div>
        </CardFooter> */}
    </Card>
  )
}

Post.propTypes = {
  message: PropTypes.string
}

export default Post
