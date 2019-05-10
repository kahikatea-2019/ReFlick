import { combineReducers } from 'redux'
import coloursReducer from './coloursReducer'
import framesReducer from './framesReducer'
import activeFrame from './activeFrameReducer'

export default combineReducers({
  coloursReducer,
  framesReducer,
  activeFrame
})
