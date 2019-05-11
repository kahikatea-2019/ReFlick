import { GET_FRAMES, UPDATE_FRAME_IMAGE, UPDATE_FRAME_MAP } from '../actions/index'
const initialFrames = [
  { id: 1, name: 1, image: [], map: { col1: null, col2: null, col3: null, col4: null } },
  { id: 2, name: 2, image: [], map: { col1: null, col2: null, col3: null, col4: null } },
  { id: 3, name: 3, image: [], map: { col1: null, col2: null, col3: null, col4: null } },
  { id: 4, name: 4, image: [], map: { col1: null, col2: null, col3: null, col4: null } }
]

function framesReducer (frames = initialFrames, action) {
  switch (action.type) {
    case GET_FRAMES:
      return frames
    case UPDATE_FRAME_IMAGE:
      return frames.map(frame => {
        if (frame.id === action.frameId) {
          frame.image = action.imageData
        }
        return frame
      })
    case UPDATE_FRAME_MAP:
      return frames.map(frame => {
        if (frame.id === action.frameId) {
          frame.map[`col${action.colourId}`] = action.colourMap
        }
        return frame
      })

    default:
      return frames
  }
}

export default framesReducer
