import React from 'react'

export default class PlayCanvas extends React.Component {
  state = {
    context: null
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
  }

  initCanvas = () => {
    const context = this.refs.canvas.getContext('2d')
    this.setState({
      context
    })
    const imageData = context.createImageData(500, 500)
    const updatedImageData = this.setBackground(imageData)
    context.putImageData(updatedImageData, 0, 0)
    console.log(imageData.data)
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

  findPixelColour (e) {
    console.log(this.state)
    var color = document.getElementById('color')
    var x = event.layerX
    var y = event.layerY
    var pixel = ctx.getImageData(x, y, 1, 1)
    var data = pixel.data
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
                 ', ' + data[2] + ', ' + (data[3] / 255) + ')'
    color.style.background = rgba
    color.textContent = rgba
  }
  render () {
    return (
      <div >
        <canvas
          onClick={this.findPixelColour}
          ref="canvas"
          width={500}
          height={500}>
        </canvas>

      </div>
    )
  }
}
