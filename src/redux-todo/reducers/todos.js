import {
  TOGGLE_TODO,
  EDIT_TODO,
  EDIT_DATA,
  CANCEL_TODO,
  RESPONSE_API,
  ADD_DATA,
  DELETE_API
} from '../actions'
const todos = (state = [], action ) => {
  switch (action.type) {
    case TOGGLE_TODO :
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case DELETE_API :
    return state.filter(todo => todo.id !== action.data)

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

    case EDIT_DATA :
      return state.map(todo =>
        (todo.id === action.data.id)
        ? {...todo, text: action.data.text, display: false}
        : todo
      )
    case RESPONSE_API:
      console.log('request done')
      return action.data.map(list => ({
        text: list.text, 
        id: list.id,
        completed: false,
      })
    )
    case ADD_DATA:
      return [
        ...state,
        {
          id: 1,
          text: action.data.text,
          completed: action.data.completed
        }
      ]
    default:
      return state
  }
}

export default todos