import React from 'react'
import { getGameData } from '../../api/games'

export default class PlayCanvas extends React.Component {
  state = {
    currentFrame: 1,
    colours: {
      red: [191, 63, 63, 255],
      blue: [63, 127, 191, 255],
      green: [63, 191, 63, 255],
      pink: [191, 63, 127, 255]
    }
  }
  componentDidMount () {
    getGameData(1)
      .then(game => {
        const returnedArray = Uint8ClampedArray.from(game.frame1Img.data)
        const returnedImageData = new ImageData(returnedArray, 500, 500)
        const context = this.refs.playcanvas.getContext('2d')
        context.putImageData(returnedImageData, 0, 0)
        this.setState({
          game
        })
      })
  }

  findPixelColour (e) {
    const { offsetX, offsetY } = e.nativeEvent
    const context = this.refs.playcanvas.getContext('2d')
    const pixelColour = Array.from(context.getImageData(offsetX, offsetY, 1, 1).data)
    console.log(this.state)
    console.log(this.state.game.frame1Map)

    if (JSON.stringify(pixelColour) === JSON.stringify(this.state.colours.red)) {
      this.setState({
        currentFrame: this.state.game.frame1Map
      })
    // } else if (JSON.stringify(pixelColour) === JSON.stringify(this.state.colours.blue)) {
    //   this.setState({
    //     currentFrame: this.state.game.frame1Map.col2
    //   })
    }
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
// If pixel colour === colour number { change frame to colour assigned frame}
