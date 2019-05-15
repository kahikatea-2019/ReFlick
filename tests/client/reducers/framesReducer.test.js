import {
  UPDATE_FRAME_MAP
} from '../../../client/actions/index'

import reducer from '../../../client/reducers/framesReducer'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(newState).toHaveLength(5)
})

test('reducer handles UPDATE_FRAME_MAP correctly', () => {
  // Arrange
  const frameId = 4
  const colourId = 4
  const colourMap = 3
  const action = {
    type: UPDATE_FRAME_MAP,
    frameId,
    colourId,
    colourMap
  }
  // Act
  const newState = reducer([frameId, colourId, colourMap], action)
  // Assert
  // expect(newState[3]['map'][`col${colourId}`]).toBe(colourMap)
})
