export const REQUEST_DATA = "REQUEST_DATA"
export const RECEIVE_DATA = "RECEIVE_DATA"

export const requestData = () => ({
  type: REQUEST_DATA
})

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
})

export const fetchData = () => dispatch => {
  dispatch(requestData())
  return setTimeout(() => {
    const data = { message: "Hello" }
    dispatch(receiveData(data))
  }, 300)
}
