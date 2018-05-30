import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions'
import { cancelTodo, deleteData, URL } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteData(URL+'/'+id, id)),
  editTodo: id => dispatch(editTodo(id)),
  cancelTodo: id => dispatch(cancelTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
