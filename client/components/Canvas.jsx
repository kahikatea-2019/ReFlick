import React from 'react'

import { saveGame } from '../api'

class Canvas extends React.Component {
  state = {
    mouseDown: false,
    context: null,
    brushSize: 10,
    brushColour: {
      r: 0,
      g: 255,
      b: 0,
      a: 255
    }
  }

  componentDidMount () {
    this.initCanvas()
  }

  initCanvas = () => {
    const context = this.refs.canvas.getContext('2d')
    this.setState({
      context
    })
    const imageData = context.createImageData(500, 500)

    // const updatedImageData = this.setBackgroundRandom(imageData)
    const updatedImageData = this.setBackground(imageData)

    context.putImageData(updatedImageData, 0, 0)
  }

  updateCanvas = (x, y) => {
    const imageData = this.state.context.getImageData(0, 0, 500, 500)
    const updatedImageData = this.paintPixels(imageData, x, y)
    this.state.context.putImageData(updatedImageData, 0, 0)
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

  // Sets background to random pixel colours
  setBackgroundRandom = (imageData) => {
    function getRandomNum (min, max) {
      return Math.random() * (max - min) + min
    }
    const { data } = imageData
    for (let i = 0; i < imageData.data.length; i += 4) {
      data[i + 0] = getRandomNum(255, 0)
      data[i + 1] = getRandomNum(255, 0)
      data[i + 2] = getRandomNum(255, 0)
      data[i + 3] = getRandomNum(255, 0)
    }
    return imageData
  }

  saveFrameImg = () => {
    const imageData = this.state.context.getImageData(0, 0, 500, 500)
    console.log('initial', imageData.data)

    // create blob
    const blob = new Blob([imageData.data.buffer])

    // api call
    saveGame(blob)

    const fileReader = new FileReader()
    // convert blob data back into arraybuffer
    fileReader.onload = e => {
      const blobArrayBuffer = event.target.result
      const blobArray = new Uint8ClampedArray(blobArrayBuffer)
      const blobImageData = new ImageData(blobArray, 500, 500)

      // draw to other canvas
      const context = this.refs.canvas2.getContext('2d')
      context.putImageData(blobImageData, 0, 0)
    }
    // read blob
    fileReader.readAsArrayBuffer(blob)
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
          onMouseUp={this.mouseUpHandler}/>
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
          height={500}/>
      </div>
    )
  }
}

export default Canvas
