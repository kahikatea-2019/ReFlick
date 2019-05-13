import {combineReducers} from 'redux'

import coloursReducer from './coloursReducer'
import framesReducer from './framesReducer'
import activeFrame from './activeFrameReducer'
import brush from './brushReducer'
import saveFrameState from './frameStateReducer'

export default combineReducers({
  coloursReducer,
  framesReducer,
  activeFrame,
  saveFrameState,
  brush
})
