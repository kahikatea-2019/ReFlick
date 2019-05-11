import React from 'react'

export default class PlayCanvas extends React.Component {
  // Finds pixel colour onClick
  findPixelColour (e) {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetX)
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
    const context = this.refs.playcanvas.getContext('2d')
    var imgData = context.getImageData(x, y, 1, 1).data
    console.log(imgData)
  }
  render () {
    return (
      <div id ="playcanvas">
        <canvas
          onClick={this.findPixelColour.bind(this)}
          ref="playcanvas"
          width={500}
          height={500}>
        </canvas>

      </div>
    )
  }
}


// Find pixel colour
// If pixel colour === 