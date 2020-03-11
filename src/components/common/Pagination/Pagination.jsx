import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PageItem from './PageItem'
import PagePrev from './PagePrev'
import PageNext from './PageNext'

const MAX_PAGE_COUNT = 20

const Pagination = ({ pageSize, totalUserCount, currentPage, onHandleChangePage }) => {
  const pageCount = Math.ceil(totalUserCount / pageSize)
  const initPage = Math.floor(currentPage / MAX_PAGE_COUNT)
  const [page, setPage] = useState(initPage)
  const pageBlocks = []

  const onPreviousPageClick = () => {
    setPage(page - 1)
    onHandleChangePage(pageBlocks[page][0])
  }

  const onNextPageClick = () => {
    setPage(page + 1)
    onHandleChangePage(pageBlocks[page][0])
  }

  const renderPagination = () => {
    if (!pageCount) return null

    let block = []
    for (let i = 1; i <= pageCount; i++) {
      block.push(i)
      if (block.length >= MAX_PAGE_COUNT || i === pageCount) {
        pageBlocks.push(block)
        block = Object.assign([])
      }
    }

    const items = []
    for (let i = 0; i < pageBlocks[page].length; i++) {
      const pageItem = <PageItem page={pageBlocks[page][i]} currentPage={currentPage} onHandleChangePage={onHandleChangePage} />
      items.push(pageItem)
    }

    if (pageCount > MAX_PAGE_COUNT && page > 0) {
      const pagePrevItem = <PagePrev page={page} onPreviousPageClick={onPreviousPageClick} />
      items.unshift(pagePrevItem)
    }

    if (pageCount > MAX_PAGE_COUNT && page < pageBlocks.length - 1) {
      const pageNextItem = <PageNext page={page} onNextPageClick={onNextPageClick} />
      items.push(pageNextItem)
    }
    return items
  }

  const pageElements = renderPagination()
  return (
    <div>
      <ul className='pagination pagination-sm' value={totalUserCount}>
        {pageElements}
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  pageSize: PropTypes.number,
  totalUserCount: PropTypes.number,
  currentPage: PropTypes.number,
  onHandleChangePage: PropTypes.func
}

export default Pagination
