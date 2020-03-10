import React from 'react'
import PropTypes from 'prop-types'

const PagePrev = ({ page, onPreviousPageClick }) => {
  return (
    <li className='page-item' onClick={() => { onPreviousPageClick() }} key={page}>
      <a className='page-link' href='#' aria-label='Previous' key={page}>
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
