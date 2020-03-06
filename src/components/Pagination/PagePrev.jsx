import React from 'react'
import PropTypes from 'prop-types'

const PagePrev = (props) => {
  return (
    <li className='page-item' onClick={() => { props.onPreviousPageClick() }} key={props.page}>
      <a className='page-link' href='#' aria-label='Previous' key={props.page}>
        <span aria-hidden='true'>&laquo;</span>
        <span className='sr-only'>Previous</span>
      </a>
    </li>
  )
}

PagePrev.propTypes = {
  page: PropTypes.number,
  onPreviousPageClick: PropTypes.func
}

export default PagePrev
