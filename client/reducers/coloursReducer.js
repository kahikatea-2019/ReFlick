import { GET_COLOURS } from '../actions/index'
const initialState = {
  colours: [
    {
      id: 1,
      r: 217,
      g: 217,
      b: 217,
      a: 255
    },
    {
      id: 2,
      r: 217,
      g: 98,
      b: 107,
      a: 255
    },
    {
      id: 3,
      r: 69,
      g: 178,
      b: 157,
      a: 255
    },
    {
      id: 4,
      r: 239,
      g: 201,
      b: 76,
      a: 255
    },
    {
      id: 5,
      r: 226,
      g: 122,
      b: 63,
      a: 255
    },
    {
      id: 6,
      r: 223,
      g: 90,
      b: 73,
      a: 255
    },
    {
      id: 7,
      r: 60,
      g: 143,
      b: 194,
      a: 255
    },
    {
      id: 8,
      r: 51,
      g: 77,
      b: 92,
      a: 255
    },
    {
      id: 9,
      r: 0,
      g: 0,
      b: 0,
      a: 255
    }
  ]
}

function coloursReducer (state = initialState, action) {
  switch (action.type) {
    case GET_COLOURS:
      return state
    default:
      return state
  }
}

export default coloursReducer
