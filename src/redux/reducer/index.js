import { combineReducers } from 'redux'
import postReducer from './reducer1'

const rootReducer = combineReducers({
  posts: postReducer
})

export { rootReducer }
