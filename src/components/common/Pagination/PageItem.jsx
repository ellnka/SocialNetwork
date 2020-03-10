import React from 'react'
import PropTypes from 'prop-types'

const PageItem = ({ page, currentPage, onHandleChangePage }) => {
  const liClass = (page === currentPage ? 'page-item disabled' : 'page-item')
  return (
    <li className={liClass} key={page}>
      <a className='page-link' href='#' onClick={() => { onHandleChangePage(page) }} key={page} value={page}>
        {page}
      </a>
    </li>
  )
}

PageItem.propTypes = {
  page: PropTypes.number,
  currentPage: PropTypes.number,
  onHandleChangePage: PropTypes.func
}

export default PageItem
