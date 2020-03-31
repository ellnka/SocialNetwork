import React from 'react'
import style from './DialogsList.module.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const DialogsList = ({ dialogs }) => {
  const items = dialogs.map((item, i) => (
    <div className={style.item + ' list-group-item'} key={i}>
      <NavLink
        to={`/messages/${item.id}`}
        activeClassName={style.activeLink}
        key={i}
      >
        {item.userName}
      </NavLink>
    </div>
  ))

  return <div className={style.dialogsList + ' list-group'}>{items}</div>
}

DialogsList.propTypes = {
  dialogs: PropTypes.array
}

export default DialogsList
