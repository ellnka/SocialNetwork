import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentPage, getUsersThunkCreator } from './../../../redux/users-reducer'

import Pagination from './Pagination'

const PaginationContainer = ({ pageSize, totalUserCount, currentPage, setCurrentPage, getUsers }) => {
  console.log(currentPage)

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
    getUsers(pageNumber, pageSize)
  }

  return (
    <div>
      <Pagination
        totalUserCount={totalUserCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onHandleChangePage={handleChangePage}
      />
    </div>)
}

PaginationContainer.propTypes = {
  pageSize: PropTypes.number,
  totalUserCount: PropTypes.number,
  currentPage: PropTypes.number,
  getUsers: PropTypes.func,
  setCurrentPage: PropTypes.func
}

const mapStateToProps = (state) => ({
  pageSize: state.usersPage.pageSize,
  totalUserCount: state.usersPage.totalUserCount,
  currentPage: state.usersPage.currentPage
})

export default connect(mapStateToProps, { setCurrentPage, getUsers: getUsersThunkCreator })(PaginationContainer)
