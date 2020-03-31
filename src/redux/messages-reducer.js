import API from './../services/api'
//  import state from './state'

export const SET_MESSAGES = 'messages/SET-MESSAGES'
export const ADD_DIALOG = 'messages/ADD-DIALOG'
export const SET_DIALOGS = 'messages/SET-DIALOGS'
export const SET_ACTIVE = 'messages/SET-ACTIVE'
export const SEND_MESSAGE = 'messages/SEND-MESSAGE'
export const EDIT_MESSAGE = 'messages/EDIT-MESSAGE'
export const SET_IS_DIALOG_LOADING = 'messages/SET-IS-DIALOG-LOADING'
export const SET_ARE_DIALOGS_LOADING = 'messages/SET-ARE_DIALOGS-LOADING'

export const addDialog = dialog => ({ type: ADD_DIALOG, dialog })
export const setActive = id => ({ type: SET_ACTIVE, id })
export const setMessages = messages => ({ type: SET_MESSAGES, messages })
export const setDialogs = dialogs => ({ type: SET_DIALOGS, dialogs })
export const sendMessage = data => ({ type: SEND_MESSAGE, data })
export const setIsDialogLoading = isLoading => ({ type: SET_IS_DIALOG_LOADING, isLoading })
export const setAreDialogsLoading = areLoading => ({ type: SET_ARE_DIALOGS_LOADING, areLoading })

const loadDialogs = async (dispatch) => {
  try {
    setAreDialogsLoading(true)
    const response = await API.getDialogs()
    dispatch(setDialogs(response.data))
    setAreDialogsLoading(false)
  } catch (error) {
    console.error(error)
  }
}

const loadActiveDialog = async (userId, dispatch) => {
  try {
    setIsDialogLoading(true)
    const response = await API.getDialog(userId)
    console.log(response.data)
    dispatch(setMessages(response.data))
  } catch (error) {
    console.error(error)
  } finally {
    setIsDialogLoading(false)
  }
}

export const sendMessageThunkCreator = (userId, message) => async (dispatch) => {
  try {
    await API.postMessage(userId, message)
    loadActiveDialog(userId, dispatch)
  } catch (error) {
    console.error(error)
  }
}

export const getDialogsThunkCreator = () => (dispatch) => {
  loadDialogs(dispatch)
}

export const getActiveDialogThunkCreator = (userId) => async (dispatch) => {
  dispatch(setActive(+userId))
  loadActiveDialog(userId, dispatch)
}

const initState = {
  dialogs: [],
  messages: { items: [], totalCount: 0 },
  activeId: null,
  isDialogLoading: false,
  areDialogsLoading: false
}

const messagesReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_IS_DIALOG_LOADING: {
      return {
        ...state,
        isDialogLoading: action.isLoading
      }
    }
    case SET_ARE_DIALOGS_LOADING: {
      return {
        ...state,
        areDialogsLoading: action.areLoading
      }
    }
    case ADD_DIALOG: {
      return {
        ...state,
        dialogs: [
          action.dialog,
          ...state.dialogs
        ]
      }
    }
    case SET_ACTIVE: {
      return {
        ...state,
        activeId: action.id
      }
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: { ...action.messages }
      }
    }
    case SET_DIALOGS: {
      return {
        ...state,
        dialogs: [...action.dialogs]
      }
    }
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
