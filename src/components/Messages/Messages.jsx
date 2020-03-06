import React from 'react'
import style from './Messages.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer'
import DialogContainer from './Dialog/DialogContainer'

const Messages = () => {
  return (
    <div className={style.messages}>
      <DialogsListContainer />
      <DialogContainer />
    </div>
  )
}

export default Messages
