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
  users, pageSize, currentPage, isFetching, isAuth,
  requestUsers
}) => {
  useEffect(() => { requestUsers(currentPage, pageSize) }, [currentPage, pageSize, requestUsers])

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <PaginationContainer />
      <Users
        users={users}
        isAuth={isAuth}
      />
    </div>)
}

UsersContainer.propTypes = {
  users: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  isAuth: PropTypes.bool,
  requestUsers: PropTypes.func
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  isAuth: state.auth.isAuth
})

export default connect(
  mapStateToProps, {
    setUsers,
    setCurrentPage,
    requestUsers: getUsersThunkCreator
  })(UsersContainer)
