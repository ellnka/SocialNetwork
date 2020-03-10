import React from 'react'
import PropTypes from 'prop-types'

const PageNext = ({ page, onNextPageClick }) => {
  return (
    <li className='page-item' onClick={() => { onNextPageClick() }} key={page}>
      <a className='page-link' href='#' aria-label='Next' key={page}>
        <span aria-hidden='true'>&raquo;</span>
        <span className='sr-only'>Next</span>
      </a>
    </li>
  )
}

PageNext.propTypes = {
  page: PropTypes.number,
  onNextPageClick: PropTypes.func
}

export default PageNext
