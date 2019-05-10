import { SET_BRUSH_COLOUR } from '../actions'

const initialState = {
  colour: {
    r: 255,
    g: 0,
    b: 0,
    a: 255
  },
  size: 10
}

function brushReducer (state = initialState, action) {
  switch (action.type) {
    case SET_BRUSH_COLOUR:
      return {
        colour: action.colour,
        size: state.size
      }

    default:
      return state
  }
}

export default brushReducer
