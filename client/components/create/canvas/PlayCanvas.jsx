import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGameData } from '../../../api/games'
import { Button } from 'react-bootstrap'

import { CANVAS_HEIGHT, CANVAS_WIDTH } from './canvasSizeData'

class PlayCanvas extends React.Component {
  state = {
    currentFrame: 1,
    colours: this.props.colours,
    coloursArray: this.props.colours.map(colourObj => {
      const { r, g, b, a } = colourObj
      return [ r, g, b, a ]
    }),
    canvasHeight: CANVAS_HEIGHT,
    canvasWidth: CANVAS_WIDTH,
    clickableCursor: false
  }

  componentDidMount () {
    const { canvasHeight, canvasWidth } = this.state
    const { id } = this.props
    getGameData(id)
      .then(game => {
        const frameIndices = [1, 2, 3, 4]
        frameIndices.forEach(i => {
          const clampedArray = Uint8ClampedArray.from(game[`frame${i}Img`].data)
          const imageData = new ImageData(clampedArray, canvasWidth, canvasHeight)
          this.setState({
            [`frame${i}Img`]: imageData,
            [`frame${i}Map`]: JSON.parse(game[`frame${i}Map`])
          })
        })
        const context = this.refs.playcanvas.getContext('2d')
        context.putImageData(this.state.frame1Img, 0, 0)
      })
  }
  componentDidUpdate (prevProps) {
    const { canvasHeight, canvasWidth } = this.state
    if (prevProps.id !== this.props.id) {
      const nextId = prevProps.id
      getGameData(nextId)
        .then(game => {
          const frameIndices = [1, 2, 3, 4]
          frameIndices.forEach(i => {
            const clampedArray = Uint8ClampedArray.from(game[`frame${i}Img`].data)
            const imageData = new ImageData(clampedArray, canvasWidth, canvasHeight)
            this.setState({
              [`frame${i}Img`]: imageData,
              [`frame${i}Map`]: JSON.parse(game[`frame${i}Map`])
            })
          })
        })
    }
  }

  displayActiveFrame = () => {
    const context = this.refs.playcanvas.getContext('2d')
    const frameImg = this.state[`frame${this.state.currentFrame}Img`]
    context.putImageData(frameImg, 0, 0)
  }

  clickHandler = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    const context = this.refs.playcanvas.getContext('2d')
    const pixelClicked = Array.from(context.getImageData(offsetX, offsetY, 1, 1).data)
    this.checkPixelColour(pixelClicked, 'click')
  }

  mouseMoveHandler = e => {
    const { offsetX, offsetY } = e.nativeEvent
    const context = this.refs.playcanvas.getContext('2d')
    const pixelClicked = Array.from(context.getImageData(offsetX, offsetY, 1, 1).data)
    this.checkPixelColour(pixelClicked, 'move')
  }

  checkPixelColour = (pixelClicked, action) => {
    this.state.coloursArray.forEach((colour, i) => {
      if (JSON.stringify(pixelClicked) === JSON.stringify(colour)) {
        const colourId = this.state.colours[i].id
        const frameMap = this.state[`frame${this.state.currentFrame}Map`]
        const frameToSwitchTo = frameMap[`col${colourId}`]
        // mouse move
        if (action === 'move') {
          if (frameToSwitchTo) {
            this.setState({
              clickableCursor: true
            })
          } else {
            this.setState({
              clickableCursor: false
            })
          }
        }
        // mouse click
        if (action === 'click') {
          if (frameToSwitchTo) {
            this.setState({
              currentFrame: frameToSwitchTo
            }, this.displayActiveFrame)
          }
        }
      }
    })
  }

  render () {
    const { canvasHeight, canvasWidth, clickableCursor } = this.state
    let style = {}
    if (clickableCursor) {
      style = { cursor: 'pointer'}
    }
    return (
      <div className="playContainer">
        <div id ="playcanvas">
          <div className="sheet">
            <canvas
              className="play-canvas"
              style={style}
              onClick={this.clickHandler}
              onMouseMove={this.mouseMoveHandler}
              ref="playcanvas"
              width={canvasWidth}
              height={canvasHeight}>
            </canvas>
            <br/>
            <div className="controls">
              <Link to ='/play'><Button variant="outline-secondary" style={{ marginLeft: '1.78vw' }}onClick={this.props.showList}>Back to list</Button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return ({
    colours: state.coloursReducer.colours
  })
}

export default connect(mapStateToProps)(PlayCanvas)
