export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const SAVE_TODO = 'SAVE_TODO'
export const CANCEL_TODO = 'CANCEL_TODO'
export const REQUEST_API = 'REQUEST_API'
export const RESPONSE_API = 'RESPONSE_API'
let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})
export const editTodo = id => ({
  type: EDIT_TODO,
  id,
  display: false
})
export const cancelTodo = id => ({
  type: CANCEL_TODO,
  id,
  display: false
})
export const saveTodo = (id, value) => ({
  type: SAVE_TODO,
  id,
  value
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}