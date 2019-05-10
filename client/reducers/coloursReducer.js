import { GET_COLOURS } from '../actions/index'
const initialState = {
  colours: [
    {
      r: 191,
      g: 63,
      b: 63,
      a: 255
    },
    {
      r: 63,
      g: 127,
      b: 191,
      a: 255
    },
    {
      r: 63,
      g: 191,
      b: 63,
      a: 255
    },
    {
      r: 191,
      g: 63,
      b: 127,
      a: 255
    }
  ]
}

function coloursReducer (state = initialState, action) {
  switch (action.type) {
    case GET_COLOURS:
      return action.colours
    default:
      return state
  }
}

export default coloursReducer
