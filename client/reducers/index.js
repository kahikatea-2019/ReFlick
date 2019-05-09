import { combineReducers } from 'redux'
import coloursReducer from './coloursReducer'
import framesReducer from './framesReducer'

export default combineReducers({
  coloursReducer,
  framesReducer
})
