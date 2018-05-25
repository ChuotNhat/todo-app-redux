import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CANCEL_TODO,
  SAVE_TODO
} from '../actions'
const todos = (state = [], action ) => {
  switch (action.type) {
    case ADD_TODO :
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO :
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case DELETE_TODO :
      return state.filter(todo => todo.id !== action.id)

    case EDIT_TODO :
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, display: true}
        : todo
      )
    case CANCEL_TODO:
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, display: false}
        : todo
      )
    case SAVE_TODO :
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, text: action.value, display: false}
        : todo
      )
    default:
      return state
  }
}

export default todos
