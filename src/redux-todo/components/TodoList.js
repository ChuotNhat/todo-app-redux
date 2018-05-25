import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, cancelTodo}) => (
  <ul className="TodoList">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
        onEdit={() => editTodo(todo.id)}
        onCancel={() => cancelTodo(todo.id)}
      />
    )}
  </ul>
)
export default TodoList
