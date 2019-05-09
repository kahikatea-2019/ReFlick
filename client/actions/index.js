export const GET_COLOURS = 'GET_COLOURS'
export const GET_FRAMES = 'GET_FRAMES'

export const getColours = (colours) => {
  return {
    type: GET_COLOURS,
    colours
  }
}
export const getFrames = (colours) => {
  return {
    type: GET_FRAMES,
    frames
  }
}
