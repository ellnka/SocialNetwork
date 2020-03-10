import state from './state'

export const SEND_MESSAGE = 'messages/SEND-MESSAGE'
export const EDIT_MESSAGE = 'messages/EDIT-MESSAGE'

export const sendMessage = data => ({ type: SEND_MESSAGE, data })

const initState = state.messagesPage

export const sendMessageThunkCreator = (message) => (dispatch) => {
  dispatch(sendMessage(message))
}

const messagesReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const message = {
        id: state.messages.length,
        text: action.data
      }
      return {
        ...state,
        messages: [
          ...state.messages,
          message
        ]
      }
    }
    default:
      return state
  }
}

export default messagesReducer
