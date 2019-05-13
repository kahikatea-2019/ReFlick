import {ACTIVE_FRAME} from '../actions/index'

function activeFrame (state = 1, action) {
  switch (action.type) {
    case ACTIVE_FRAME:
      return action.frame
    default:
      return state
  }
}

export default activeFrame
