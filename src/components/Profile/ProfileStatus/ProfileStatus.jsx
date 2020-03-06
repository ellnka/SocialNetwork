import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => { setStatus(props.status) }, [props.status])

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deActivateEditMode = () => {
    setEditMode(false)
  }

  const handleStatusDoubleClick = () => {
    activateEditMode()
  }

  const handleStatusBlur = () => {
    deActivateEditMode()
    props.onStatusChanged(status)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={handleStatusDoubleClick}>{props.status || 'Enter your status...'}</span>
        </div>}

      {editMode &&
        <div>
          <input
            value={status}
            onBlur={handleStatusBlur}
            defaultValue={props.status}
            onChange={handleStatusChange}
          />
        </div>}
    </div>
  )
}

ProfileStatus.propTypes = {
  status: PropTypes.string,
  onStatusChanged: PropTypes.func
}

export default ProfileStatus
