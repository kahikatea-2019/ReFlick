import React from 'react'
import { connect } from 'react-redux'

import { submitGame, getGameData } from '../../api/games'

class Canvas extends React.Component {
  state = {
    mouseDown: false,
    brushSize: this.props.brushSize,
    brushColour: this.props.brushColour,
    activeFrame: this.props.activeFrame,
    frame1Img: new ImageData(500, 500),
    frame2Img: new ImageData(500, 500),
    frame3Img: new ImageData(500, 500),
    frame4Img: new ImageData(500, 500)
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
      }, this.displayActiveFrame)
    }
  }

  initCanvas = () => {
    this.setState({
      frame1Img: this.setBackground(this.state.frame1Img),
      frame2Img: this.setBackground(this.state.frame2Img),
      frame3Img: this.setBackground(this.state.frame3Img),
      frame4Img: this.setBackground(this.state.frame4Img)
    }, this.displayActiveFrame)
  }

  // Sets background colour, default is black
  setBackground = (imageData, r = 0, g = 0, b = 0, a = 255) => {
    // const newImageData = { ...imageData }
    const { data } = imageData
    for (let i = 0; i < imageData.data.length; i += 4) {
      data[i + 0] = r
      data[i + 1] = g
      data[i + 2] = b
      data[i + 3] = a
    }
    return imageData
  }

  displayActiveFrame () {
    const context = this.refs.canvas.getContext('2d')
    const frameImg = this.state[`frame${this.state.activeFrame}Img`]
    context.putImageData(frameImg, 0, 0)
  }

  updateCanvas = (x, y) => {
    const context = this.refs.canvas.getContext('2d')
    const frameImg = this.state[`frame${this.state.activeFrame}Img`]
    this.paintPixels(frameImg, x, y)
    this.displayActiveFrame()
  }

  // Changes colour for a square of size x size pixels
  paintPixels (imageData, x, y) {
    const { brushSize } = this.state
    const { r, g, b, a } = this.state.brushColour
    const { width, data } = imageData

    const size = brushSize
    console.log(x, y)
    const center = [x, y]

    const bottomLeft = [x - size / 2, y - size / 2]

    const square = []
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        square.push([ bottomLeft[0] + i, bottomLeft[1] + j ])
      }
    }
    console.log(square)

    const inCircle = square.filter(coords => {
      const x1 = center[0]
      const y1 = center[1]
      const x2 = coords[0]
      const y2 = coords[1]
      const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

      return distance < (size / 2)
    })

    console.log(inCircle)

    const circleIndices = inCircle.map(coords => {
      const x = coords[0]
      const y = coords[1]
      return (x + y * width) * 4
    })

    circleIndices.forEach(i => {
      data[i + 0] = r
      data[i + 1] = g
      data[i + 2] = b
      data[i + 3] = a
    })
    return imageData
  }

  saveFrameImg = () => {
    const frame1Map = this.props.frames[0].map
    const frame2Map = this.props.frames[1].map
    const frame3Map = this.props.frames[2].map
    const frame4Map = this.props.frames[3].map

    const { frame1Img, frame2Img, frame3Img, frame4Img } = this.state
    const frame1Blob = new Blob([frame1Img.data.buffer])
    const frame2Blob = new Blob([frame2Img.data.buffer])
    const frame3Blob = new Blob([frame3Img.data.buffer])
    const frame4Blob = new Blob([frame4Img.data.buffer])

    submitGame({ frame1Blob, frame1Map, frame2Blob, frame2Map, frame3Blob, frame3Map, frame4Blob, frame4Map })
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
