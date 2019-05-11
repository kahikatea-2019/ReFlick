import { GET_COLOURS } from '../actions/index'
const initialState = {
  colours: [
    {
      id: 1,
      r: 191,
      g: 63,
      b: 63,
      a: 255
    },
    {
      id: 2,
      r: 63,
      g: 127,
      b: 191,
      a: 255
    },
    {
      id: 3,
      r: 63,
      g: 191,
      b: 63,
      a: 255
    },
    {
      id: 4,
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
