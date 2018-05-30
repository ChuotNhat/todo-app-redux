import {
  REQUEST_API
} from '../actions'
const handleApi = (state = { data: {}, isSending: false}, action) => {
  switch (action.type) {
    case REQUEST_API:
      console.log('request sending')
      return {
        ...state,
        isSending: true
      }
    default:
      return state
  }
}

export default handleApi