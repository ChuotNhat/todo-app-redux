import React, { Component } from 'react'
import Footer from './Footer'
import '../App.css';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return(
      <div className="App1">
        <h3 className="title">Todo app redux</h3>
        <AddTodo />
        <VisibleTodoList /> 
        <Footer />
      </div>
    );
  }
}
export default App
