import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import handleApi from './handleApi'

export default combineReducers({
  todos,
  visibilityFilter,
  handleApi
})
