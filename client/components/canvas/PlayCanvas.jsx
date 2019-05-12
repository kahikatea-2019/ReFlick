import React from 'react'
import { getGameData } from '../../api/games'
import { connect } from 'react-redux'

class PlayCanvas extends React.Component {
  state = {
    currentFrame: 1,
    // colours: {
    //   red: [191, 63, 63, 255],
    //   blue: [63, 127, 191, 255],
    //   green: [63, 191, 63, 255],
    //   pink: [191, 63, 127, 255]
    // }
    colours: this.props.colours
  }

  componentDidMount () {
    getGameData(23)
      .then(game => {
        const frameIndices = [1, 2, 3, 4]
        frameIndices.forEach(i => {
          const clampedArray = Uint8ClampedArray.from(game[`frame${i}Img`].data)
          const imageData = new ImageData(clampedArray, 500, 500)
          this.setState({
            [`frame${i}Img`]: imageData,
            [`frame${i}Map`]: JSON.parse(game[`frame${i}Map`])
          })
        })
        const context = this.refs.playcanvas.getContext('2d')
        context.putImageData(this.state.frame1Img, 0, 0)
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

function mapStateToProps (state) {
  return ({
    colours: state.coloursReducer
  })
}

export default connect(mapStateToProps)(PlayCanvas)

// Find pixel colour
// If pixel colour === colour number { change frame to colour assigned frame}
