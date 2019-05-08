import React from 'react'

class Canvas extends React.Component {
  componentDidMount () {
    this.initCanvas()
  }

  redBackground (imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = 255
      imageData.data[i + 1] = 0
      imageData.data[i + 2] = 0
      imageData.data[i + 3] = 255
    }

    return imageData
  }

  initCanvas () {
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.createImageData(500, 500)

    // const updatedImageData = this.randomPixels(imageData)
    const updatedImageData = this.redBackground(imageData)

    this.drawCanvas(updatedImageData)
    return updatedImageData
  }

  updateCanvas (x, y) {
    const context = this.refs.canvas.getContext('2d')
    const imageData = context.getImageData(0, 0, 500, 500)
    const updatedImageData = this.setPixel(imageData, x, y)

    this.drawCanvas(updatedImageData)
  }

  drawCanvas (imageData) {
    const context = this.refs.canvas.getContext('2d')
    context.putImageData(imageData, 0, 0)
    console.log('canvas drawn!', imageData)
  }

  setPixel (imageData, x, y, r = 0, g = 255, b = 0, a = 255) {
    const i = (x + y * imageData.width) * 4
    console.log('index', i)
    imageData.data[i + 0] = r
    imageData.data[i + 1] = g
    imageData.data[i + 2] = b
    imageData.data[i + 3] = a

    return imageData
  }

  randomPixels (imageData) {
    function getRandomNum (min, max) {
      return Math.random() * (max - min) + min
    }
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = getRandomNum(255, 0)
      imageData.data[i + 1] = getRandomNum(255, 0)
      imageData.data[i + 2] = getRandomNum(255, 0)
      imageData.data[i + 3] = getRandomNum(255, 0)
    }
    return imageData
  }

  clickHandler = e => {
    this.initCanvas()
  }

  pixelClickHandler = e => {
    const { offsetX: x, offsetY: y } = e.nativeEvent
    this.updateCanvas(x, y)
  }

  render () {
    return (
      <div>
        <canvas
          ref="canvas"
          width={500}
          height={500}
          onClick={this.pixelClickHandler}/>
        <button
          onClick={this.clickHandler}>
          Clickme
        </button>
      </div>
    )
  }
}

export default Canvas

// The ImageData interface represents the underlying pixel data of an area of a <canvas> element

// ImageData()
// Creates an ImageData object from a given Uint8ClampedArray and the size of the image it contains.
