import React from 'react'
import { connect } from 'react-redux'
import { saveTodo } from '../actions'
const Todo = ({ id, onClick, onDelete, completed, text , onEdit, onSave, onCancel, display, dispatch}) => {
  let input
  return (
    <li>
      <p className= {display ? 'visibleContainer' : 'noneContainer'} >
        <input defaultValue={text} ref={node => input = node} />
        <button 
          onClick={() => {
            dispatch(saveTodo(id, input.value))
          }}
          className="btn btn--save">
          Save
        </button>
        <button 
          onClick={onCancel} 
          className="btn btn--cancel">
          Cancel
        </button>
      </p>

      <p className= {display ? 'noneContainer' : 'visibleContainer'}>
        <span 
          onClick={onClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}>
          {text}
        </span>
        <button 
          onClick={onDelete} 
          className="btn btn--delete">
          Delete
        </button>
        <button 
          onClick={onEdit} 
          className="btn btn--edit">
          Edit
        </button>
      </p>
    </li>
  )
}
export default connect()(Todo)
