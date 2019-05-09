import { GET_COLOURS } from '../actions/index'
const initialState = {
  colours: [
    'red',
    'blue',
    'green',
    'pink'
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
