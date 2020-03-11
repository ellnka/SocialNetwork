export const requestData = async (dispatch, method, progressActionCreator, actionCreator, data) => {
  dispatch(progressActionCreator(true, data))
  const response = await method(data)
  if (response.data && response.data.resultCode === 0) {
    dispatch(actionCreator(data))
  }
  dispatch(progressActionCreator(false, data))
}
