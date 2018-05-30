import React, { Component } from 'react'
import Footer from './Footer'
import '../App.css';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {connect} from 'react-redux'
import { fetchData, URL } from '../actions'
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData(URL))
  }
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
const mapStateToProps = state => state.handleApi
export default connect(mapStateToProps)(App)
