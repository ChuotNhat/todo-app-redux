import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './redux-todo/components/App'
import rootReducer from './redux-todo/reducers'
import thunkMiddleware from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();