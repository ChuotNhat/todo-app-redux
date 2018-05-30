export const URL ='https://5aebcd91046d7b0014fb6e5d.mockapi.io/api/dl/todo'
export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = "TOGGLE_TODO"
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_DATA = 'EDIT_DATA'
export const CANCEL_TODO = 'CANCEL_TODO'
export const REQUEST_API = 'REQUEST_API'
export const RESPONSE_API = 'RESPONSE_API'
export const ADD_DATA = 'ADD_DATA'
export const DELETE_API = 'DELETE_API'

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
export const editTodo = id => ({
  type: EDIT_TODO,
  id,
  display: false
})
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
export const cancelTodo = id => ({
  type: CANCEL_TODO,
  id,
  display: false
})
export const saveTodo = (id, text) => ({
  text,
  id
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
const requestApi = () => ({
  type: REQUEST_API
})
const responseApi = data => ({
  type: RESPONSE_API,
  data
})

export const fetchData = url => dispatch => {
  dispatch(requestApi())
  fetch(url)
    .then(response  => response.json())
    .then(json => dispatch(responseApi(json)))
}

export const editDataAPI = (url, data) => dispatch => {
  dispatch(requestApi())
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(dispatch(editData(data)))
  .catch(function(error) { console.log(error); })
}

const editData = data => ({
  type: EDIT_DATA,
  data
})
export const addTodo = text => ({
  text,
  completed: false
})
const addData = data => ({
  type: ADD_DATA,
  data
})
// add 
export const postData = (url, data) => dispatch => {
  dispatch(requestApi())
  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  })
  .then(response  => response.json())
  .then(json => dispatch(addData(json)))
  .catch(function(error) { console.log(error); })
}

const deleteApi = (data) => ({
  type: DELETE_API,
  data
})
export const deleteData = (url, id) => dispatch => {
  dispatch(requestApi())
  fetch(url, {
    method: 'DELETE',
  })
  .then(response  => response.json())
  .then(dispatch(deleteApi(id)))
  .catch(function(error) { console.log(error); })
}
