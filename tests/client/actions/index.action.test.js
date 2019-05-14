import {
  getColours,
  getFrames,
  setFrame, 
  setBrushColour,
  setBrushSize,
  updateFrameImage,
  updateFrameMap,
  GET_COLOURS,
  GET_FRAMES,
  ACTIVE_FRAME,
  SET_BRUSH_COLOUR,
  SET_BRUSH_SIZE,
  UPDATE_FRAME_IMAGE,
  UPDATE_FRAME_MAP

} from '../../../client/actions/index'

test('getColours creates a correct action', () => {
  const name = 'test getColours'
  const action = getColours(name)
  expect(action.type).toBe(GET_COLOURS)
})

test('getFrames creates a correct action', () => {
  const name = 'test getFrames'
  const action = getFrames(name)
  expect(action.type).toBe(GET_FRAMES)
})

test('setFrame creates a correct action', () => {
  const name = 'test getFrame'
  const action = setFrame(name)
  expect(action.type).toBe(ACTIVE_FRAME)
})

test('setBrushColour creates a correct action', () => {
  const name = 'test setBrushColour'
  const action = setBrushColour(name)
  expect(action.type).toBe(SET_BRUSH_COLOUR)
})

test('setBrushSize creates a correct action', () => {
  const name = 'test setBrushSize'
  const action = setBrushSize(name)
  expect(action.type).toBe(SET_BRUSH_SIZE)
})

test('updateFrameImage creates a correct action', () => {
  const name = 'test updateFrameImage'
  const action = updateFrameImage(name)
  expect(action.type).toBe(UPDATE_FRAME_IMAGE)
})

test('updateFrameMap creates a correct action', () => {
  const name = 'test updateFrameMap'
  const action = updateFrameMap(name)
  expect(action.type).toBe(UPDATE_FRAME_MAP)
})
