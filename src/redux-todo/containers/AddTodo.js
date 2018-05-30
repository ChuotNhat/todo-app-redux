import React from 'react'
import { connect } from 'react-redux'
import { addTodo, postData, URL } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="Addtodo">
      <form onSubmit={e => {
          e.preventDefault()
          dispatch(postData(URL, addTodo(input.value)));
          input.value = ''
        }}>
        <input ref={node => input = node} placeholder="Input free text"/>
        <button type="submit" className="btn btn--submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
export default connect()(AddTodo)
