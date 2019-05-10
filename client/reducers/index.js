import { combineReducers } from 'redux'

import coloursReducer from './coloursReducer'
import framesReducer from './framesReducer'
import brush from './brushReducer'

export default combineReducers({
  coloursReducer,
  framesReducer,
  brush
})
