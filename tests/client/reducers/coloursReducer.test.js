import {
  GET_COLOURS
} from '../../../client/actions/index'

import reducer from '../../../client/reducers/coloursReducer'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect((newState.colours)).toHaveLength(9)
})

test('reducer handles GET_COLOURS correctly', () => {
  // Arrange
  const colours = undefined
  const action = {
    type: GET_COLOURS,
    colours
  }
  // Act
  const newState = reducer(colours, action)
  // Assert
  expect(newState.colours).toHaveLength(9)
})
