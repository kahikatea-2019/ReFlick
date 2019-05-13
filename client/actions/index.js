export const GET_COLOURS = 'GET_COLOURS'
export const GET_FRAMES = 'GET_FRAMES'
export const ACTIVE_FRAME = 'ACTIVE_FRAME'
export const SET_BRUSH_COLOUR = 'SET_BRUSH_COLOUR'
export const SET_BRUSH_SIZE = 'SET_BRUSH_SIZE'
export const UPDATE_FRAME_IMAGE = 'UPDATE_FRAME_IMAGE'
export const UPDATE_FRAME_MAP = 'UPDATE_FRAME_MAP'
export const FRAME_STATE = 'FRAME_STATE'

export const getColours = (colours) => {
  return {
    type: GET_COLOURS,
    colours
  }
}
export const getFrames = () => {
  return {
    type: GET_FRAMES

  }
}

export const setFrame = (frame) => {
  return {
    type: ACTIVE_FRAME,
    frame
  }
}

export const setBrushColour = (colour) => {
  return {
    type: SET_BRUSH_COLOUR,
    colour
  }
}

export const setBrushSize = (size) => {
  return {
    type: SET_BRUSH_SIZE,
    size
  }
}

export const updateFrameImage = (frameId, imageData) => {
  return {
    type: UPDATE_FRAME_IMAGE,
    frameId,
    imageData
  }
}

export const updateFrameMap = (frameId, colourId, colourMap) => {
  console.log(frameId, colourId, colourMap)
  return {
    type: UPDATE_FRAME_MAP,
    frameId,
    colourId, // id number for colour
    colourMap // id number for frame
  }
}

export const updateFrameState = (frameId, stateObj) => {
  return {
    type: FRAME_STATE,
    frameId,
    stateObj
  }
}
