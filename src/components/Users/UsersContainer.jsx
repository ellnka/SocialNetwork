import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setUsers,
  setCurrentPage,
  getUsersThunkCreator
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import PaginationContainer from './../common/Pagination/PaginationContainer'
import { getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching } from '../../redux/users-selectors'

const UsersContainer = ({
  users, pageSize, totalUserCount, currentPage, isFetching,
  requestUsers, setCurrentPage
}) => {
  useEffect(() => { requestUsers(currentPage, pageSize) }, [currentPage, pageSize, requestUsers])

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
    requestUsers(pageNumber, pageSize)
  }

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <PaginationContainer />
      <Users
        totalUserCount={totalUserCount}
        pageSize={pageSize}
        currentPage={currentPage}
        users={users}
        onHandleChangePage={handleChangePage}
      />
    </div>)
}

UsersContainer.propTypes = {
  users: PropTypes.array,
  pageSize: PropTypes.number,
  totalUserCount: PropTypes.number,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  requestUsers: PropTypes.func,
  setCurrentPage: PropTypes.func
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state)
})

export default connect(
  mapStateToProps, {
    setUsers,
    setCurrentPage,
    requestUsers: getUsersThunkCreator
  })(UsersContainer)
