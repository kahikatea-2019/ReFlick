import {
  ACTIVE_FRAME
} from '../../../client/actions/index'

import reducer from '../../../client/reducers/activeFrameReducer'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect((newState)).toBe(1)
})

test('reducer handles ACTIVE_FRAME correctly', () => {
  // Arrange
  const newActiveFrame = 1
  const action = {
    type: ACTIVE_FRAME,
    frame: newActiveFrame
  }
  // Act
  const newState = reducer(newActiveFrame, action)
  // Assert
  expect(newState).toBe(newActiveFrame)
})
