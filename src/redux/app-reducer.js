import { getAuthUserThunkCreator } from './auth-reducer'

export const SET_INIT = 'app/SET-INIT'

export const setIsInit = isInit => ({ type: SET_INIT, isInit })

const initState = {
  isInit: false
}

export const initializeThunkCreator = () => (dispatch) => {
  const promise = dispatch(getAuthUserThunkCreator())
  Promise.all([promise]).then(
    dispatch(setIsInit(true)))
}

const appReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_INIT: {
      return { ...state, isInit: action.isInit }
    }
    default:
      return state
  }
}

export default appReducer
