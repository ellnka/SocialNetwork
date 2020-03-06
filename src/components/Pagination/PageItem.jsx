import React from 'react'
import PropTypes from 'prop-types'

const PageItem = (props) => {
  const liClass = (props.page === props.currentPage ? 'page-item disabled' : 'page-item')
  return (
    <li className={liClass} key={props.page}>
      <a className='page-link' href='#' onClick={() => { props.onHandleChangePage(props.page) }} key={props.page} value={props.page}>
        {props.page}
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
