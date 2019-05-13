import {GET_FRAMES, UPDATE_FRAME_IMAGE, UPDATE_FRAME_MAP} from '../actions/index'
const initialFrames = [
  {id: 0, name: 'None', map: {col1: null, col2: null, col3: null, col4: null, col5: null, col6: null, col7: null, col8: null, col9: null}}, // Special frame for dropdowns
  {id: 1, name: 1, map: {col1: null, col2: null, col3: null, col4: null, col5: null, col6: null, col7: null, col8: null, col9: null}},
  {id: 2, name: 2, map: {col1: null, col2: null, col3: null, col4: null, col5: null, col6: null, col7: null, col8: null, col9: null}},
  {id: 3, name: 3, map: {col1: null, col2: null, col3: null, col4: null, col5: null, col6: null, col7: null, col8: null, col9: null}},
  {id: 4, name: 4, map: {col1: null, col2: null, col3: null, col4: null, col5: null, col6: null, col7: null, col8: null, col9: null}}
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
