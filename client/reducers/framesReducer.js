import { GET_FRAMES } from '../actions/index'
const initialState = {
  frames: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 }
  ]
}

function coloursReducer (state = initialState, action) {
  switch (action.type) {
    case GET_FRAMES:
      return action.frames
    default:
      return state
  }
}

export default coloursReducer
