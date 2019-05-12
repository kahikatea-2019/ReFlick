import React from 'react'
import { connect } from 'react-redux'
import { getGameData } from '../../api/games'

class PlayCanvas extends React.Component {
  state = {
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
    if (JSON.stringify(pixelColour) === JSON.stringify(this.state.colours.red)) {
      console.log('true')
    }
    console.log(pixelColour)
    console.log(this.state)

    // if (frame.colour === pixelColour) {
    //   this.setState({
    //     activeFrame: frame[key]
    //   })
    // }
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

function mapStateToProps (state) {
  return {
    activeFrame: state.activeFrame
  }
}

export default connect(mapStateToProps)(PlayCanvas)
// Find pixel colour
// If pixel colour ===
