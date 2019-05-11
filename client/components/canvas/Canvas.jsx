import React from 'react'
import { connect } from 'react-redux'

import { submitGame, getGameData } from '../../api/games'
import { updateFrameImage } from '../../actions'

class Canvas extends React.Component {
  state = {
    mouseDown: false,
    brushSize: this.props.brushSize,
    brushColour: this.props.brushColour,
    activeFrame: this.props.activeFrame
  }

  componentDidMount () {
    this.initCanvas()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.brushColour !== this.props.brushColour) {
      this.setState({
        brushColour: this.props.brushColour
      })
    }
    if (prevProps.brushSize !== this.props.brushSize) {
      this.setState({
        brushSize: this.props.brushSize
      })
    }
    if (prevProps.activeFrame !== this.props.activeFrame) {
      this.setState({
        activeFrame: this.props.activeFrame
      })
    }
  }

  initCanvas = () => {
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.createImageData(500, 500)
    const updatedImageData = this.setBackground(imageData)
    context.putImageData(updatedImageData, 0, 0)

    const frame1Img = { ...updatedImageData }
    const frame2Img = { ...updatedImageData }
    const frame3Img = { ...updatedImageData }
    const frame4Img = { ...updatedImageData }
  }

  updateCanvas = (x, y) => {
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.getImageData(0, 0, 500, 500)
    const updatedImageData = this.paintPixels(imageData, x, y)
    context.putImageData(updatedImageData, 0, 0)
  }

  // Sets background colour, default is black
  setBackground = (imageData, r = 0, g = 0, b = 0, a = 255) => {
    const { data } = imageData
    for (let i = 0; i < imageData.data.length; i += 4) {
      data[i + 0] = r
      data[i + 1] = g
      data[i + 2] = b
      data[i + 3] = a
    }
    return imageData
  }

  // Changes colour for a square of size x size pixels
  paintPixels (imageData, x, y) {
    const { brushSize } = this.state
    const { r, g, b, a } = this.state.brushColour
    const { width, data } = imageData
    const centreIndex = (x + y * width) * 4
    const topLeft = centreIndex - (brushSize / 2 * 4)

    const pixelsToPaint = []
    for (let i = 0; i < brushSize; i++) {
      const top = (topLeft + 4 * i)
      for (let j = 0; j < brushSize; j++) {
        pixelsToPaint.push(top - (width * 4 * j))
      }
    }
    pixelsToPaint.forEach(i => {
      data[i + 0] = r
      data[i + 1] = g
      data[i + 2] = b
      data[i + 3] = a
    })
    return imageData
  }

  saveFrameImg = () => {
    const frame1Map = this.props.frames[0].map
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.getImageData(0, 0, 500, 500)
    const frame1Img = new Blob([imageData.data.buffer])
    submitGame({ frame1Img, frame1Map })
      .then(() => {
        return getGameData(1)
          .then(game => {
            const returnedArray = Uint8ClampedArray.from(game.frame1Img.data)
            const returnedImageData = new ImageData(returnedArray, 500, 500)
            const context = this.refs.canvas2.getContext('2d')
            context.putImageData(returnedImageData, 0, 0)
          })
      })
  }

  reset = e => {
    this.initCanvas()
  }

  mouseDownHandler = e => {
    this.setState({
      mouseDown: true
    })
    const { offsetX: x, offsetY: y } = e.nativeEvent
    this.updateCanvas(x, y)
  }

  mouseUpHandler = e => {
    this.setState({
      mouseDown: false
    })
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.getImageData(0, 0, 500, 500)
    const { dispatch, activeFrame } = this.props
    dispatch(updateFrameImage(activeFrame, imageData.data))
  }

  mouseMoveHandler = e => {
    if (this.state.mouseDown) {
      const { offsetX: x, offsetY: y } = e.nativeEvent
      this.updateCanvas(x, y)
    }
  }

  render () {
    return (
      <div>
        <canvas
          ref="canvas"
          width={500}
          height={500}
          onMouseDown={this.mouseDownHandler}
          onMouseMove={this.mouseMoveHandler}
          onMouseUp={this.mouseUpHandler} />
        {/* <CanvasView
          imageData={new ImageData(500, 500)}
          mouseDownHandler={this.mouseDownHandler}
          mouseMoveHandler={this.mouseMoveHandler}
          mouseUpHandler={this.mouseUpHandler}/> */}
        <button
          onClick={this.reset}>
          Reset
        </button>
        <button
          onClick={this.saveFrameImg}>
          Save
        </button>
        <canvas
          ref="canvas2"
          width={500}
          height={500} />
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    brushColour: state.brush.colour,
    brushSize: state.brush.size,
    activeFrame: state.activeFrame,
    frames: state.framesReducer
  }
)

export default connect(mapStateToProps)(Canvas)
