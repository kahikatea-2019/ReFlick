import { GET_FRAMES } from '../actions/index'
const initialState = {
  frames: [
    { id: 1, name: 1, map: { col1: null, col2: null, col3: null, col4: null } },
    { id: 2, name: 2, map: { col1: null, col2: null, col3: null, col4: null } },
    { id: 3, name: 3, map: { col1: null, col2: null, col3: null, col4: null } },
    { id: 4, name: 4, map: { col1: null, col2: null, col3: null, col4: null } }
  ]
}

function framesReducer (state = initialState, action) {
  switch (action.type) {
    case GET_FRAMES:
      return state
    default:
      return state
  }
}

export default framesReducer
