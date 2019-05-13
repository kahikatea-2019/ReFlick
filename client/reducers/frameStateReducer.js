import {FRAME_STATE} from '../actions/index'

const framesState = [
  {id: 1, newFrame: true, stateObj: {}},
  {id: 2, newFrame: true, stateObj: {}},
  {id: 3, newFrame: true, stateObj: {}},
  {id: 4, newFrame: true, stateObj: {}}
]

function saveFrameState (state = framesState, action) {
  switch (action.type) {
    case FRAME_STATE:
      return state.map(frameObj => {
        if (frameObj.id === action.frameId) {
          return {id: frameObj.id, stateObj: {colour: action.stateObj.colo}}
        }
      })
    default:
      return state
  }
}

export default saveFrameState

// function framesReducer (frames = initialFrames, action) {
//   switch (action.type) {
//     case GET_FRAMES:
//       return frames
//     case UPDATE_FRAME_IMAGE:
//       return frames.map(frame => {
//         if (frame.id === action.frameId) {
//           frame.image = action.imageData
//         }
//         return frame
//       })
//     case UPDATE_FRAME_MAP:
//       return frames.map(frame => {
//         if (frame.id === action.frameId) {
//           frame.map[`col${action.colourId}`] = action.colourMap
//         }
//         return frame
//       })

//     default:
//       return frames
//   }
// }
