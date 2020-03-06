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
import PaginationContainer from './../Pagination/PaginationContainer'
import { getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching } from '../../redux/users-selectors'

const UsersContainer = (props) => {
  useEffect(() => { props.requestUsers(props.currentPage, props.pageSize) }, [props.currentPage])

  const handleChangePage = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.requestUsers(pageNumber, props.pageSize)
  }

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <PaginationContainer totalUserCount={props.totalUserCount} />
      <Users
        totalUserCount={props.totalUserCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
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
