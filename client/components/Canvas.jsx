import React from 'react'

class Canvas extends React.Component {
  componentDidMount () {
    this.updateCanvas()
  }

  updateCanvas () {
    const context = this.refs.canvas.getContext('2d')

    function getRandomNum (min, max) {
      return Math.random() * (max - min) + min
    }

    const imageData = context.createImageData(1000, 1000)
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = getRandomNum(255, 0)
      imageData.data[i + 1] = getRandomNum(255, 0)
      imageData.data[i + 2] = getRandomNum(255, 0)
      imageData.data[i + 3] = getRandomNum(255, 0)
    }

    context.putImageData(imageData, 0, 0)
  }

  clickHandler = e => {
    this.updateCanvas()
  }

  render () {
    return (
      <div>
        <canvas ref="canvas" width={300} height={300}/>
        <button
          onClick={() => this.clickHandler()}>
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
