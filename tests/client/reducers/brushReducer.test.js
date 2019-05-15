import {
  SET_BRUSH_COLOUR, SET_BRUSH_SIZE
} from '../../../client/actions/index'

import reducer from '../../../client/reducers/brushReducer'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect((newState.colour.r)).toBe(239)
  expect((newState.size)).toBe(20)
})

test('reducer handles SET_BRUSH_COLOUR correctly', () => {
  // Arrange
  const colour = { r: 0, g: 0, b: 0, a: 255 }
  const action = {
    type: SET_BRUSH_COLOUR,
    colour
  }
  // Act
  const newState = reducer(colour, action)
  // Assert
  expect(newState.colour.r).toBe(0)
  expect(newState.colour.g).toBe(0)
  expect(newState.colour.b).toBe(0)
  expect(newState.colour.a).toBe(255)
})

test('reducer handles SET_BRUSH_SIZE correctly', () => {
  // Arrange
  const size = 420
  const action = {
    type: SET_BRUSH_SIZE,
    size
  }
  // Act
  const newState = reducer(size, action)
  // Assert
  expect(newState.size).toBe(420)
})
