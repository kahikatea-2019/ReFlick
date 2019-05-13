import {FRAME_STATE} from '../actions/index'

const framesState = [
  {id: 1, stateObj: {}},
  {id: 2, stateObj: {}},
  {id: 3, stateObj: {}},
  {id: 4, stateObj: {}}
]

function saveFrameState (state = framesState, action) {
  switch (action.type) {
    case FRAME_STATE:
      return action.stateObj
    default:
      return state
  }
}

export default saveFrameState
