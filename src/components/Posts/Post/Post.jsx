import React from 'react'
import PropTypes from 'prop-types'
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
        <h5 className='inline m-b-none m-t-none'>Message</h5>
      </CardHeader>
      <CardBody>
        <div>
          <h3>{props.message}</h3>
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
