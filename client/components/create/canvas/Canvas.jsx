import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import Toolbar from '../../Toolbar'

import { submitGame } from '../../../api/games'

import { CANVAS_HEIGHT, CANVAS_WIDTH } from './canvasSizeData'
import { thisTypeAnnotation } from '@babel/types'

class Canvas extends React.Component {
  state = {
    mouseDown: false,
    brushSize: this.props.brushSize,
    brushColour: this.props.brushColour,
    activeFrame: this.props.activeFrame,
    frame1Img: new ImageData(CANVAS_WIDTH, CANVAS_HEIGHT),
    frame2Img: new ImageData(CANVAS_WIDTH, CANVAS_HEIGHT),
    frame3Img: new ImageData(CANVAS_WIDTH, CANVAS_HEIGHT),
    frame4Img: new ImageData(CANVAS_WIDTH, CANVAS_HEIGHT),
    canvasHeight: CANVAS_HEIGHT,
    canvasWidth: CANVAS_WIDTH,
    prevPos: [null, null],
    cursor: 'paint', // paint or fill
    fill: false
  }

  componentDidMount () {
    this.initCanvas()
    this.thumbnailtest()
  }

  thumbnailtest = () => {
    const thumbnail = this.state.frame1Img
    const context = this.refs['canvas2'].getContext('2d')
    context.putImageData(thumbnail, 0, 0)
    console.log('read test', context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT))
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

  // Sets background colour, default is grey
  setBackground = (imageData, r = 217, g = 217, b = 217, a = 255) => {
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

  updateCanvas = (x, y, isDragged) => {
    const context = this.refs.canvas.getContext('2d')
    const frameImg = this.state[`frame${this.state.activeFrame}Img`]
    this.paintPixels(frameImg, x, y, isDragged)
    this.displayActiveFrame()
  }

  fill = () => {
    const frameImg = this.state[`frame${this.state.activeFrame}Img`]
    const { r, g, b, a } = this.state.brushColour
    this.setBackground(frameImg, r, g, b, a)
    this.updateCanvas()
    this.setState({
      cursor: 'paint',
      fill: false
    })
  }

  fillOn = () => {
    console.log('fillOn')
    this.setState({
      cursor: 'fill',
      fill: true
    })
  }

  fillOff = () => {
    this.setState({
      cursor: 'paint',
      fill: false
    })
  }

  paintPixels (imageData, xClick, yClick, isDragged) {
    const { brushSize } = this.state
    const { r, g, b, a } = this.state.brushColour
    const { width, data } = imageData
    const size = brushSize

    function paintCircle (xIn, yIn) {
      const x = Math.round(xIn)
      const y = Math.round(yIn)
      const center = [x, y]
      const bottomLeft = [x - size / 2, y - size / 2]

      function isValidCoord ([x, y]) {
        if (x > 0 && x < width) {
          if (y > 0 && y < width) {
            return true
          }
        }
        return false
      }

      const pixelsSquare = []
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (isValidCoord([ bottomLeft[0] + i, bottomLeft[1] + j ])) {
            pixelsSquare.push([ bottomLeft[0] + i, bottomLeft[1] + j ])
          }
        }
      }

      const radiusSquared = (size / 2) * (size / 2)

      const pixelsInCircle = pixelsSquare.filter(coords => {
        const x1 = center[0]
        const y1 = center[1]
        const x2 = coords[0]
        const y2 = coords[1]
        const distanceSquared = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
        return distanceSquared < radiusSquared
      })

      pixelsInCircle.forEach(coords => {
        const x = coords[0]
        const y = coords[1]
        const i = (x + y * width) * 4
        data[i + 0] = r
        data[i + 1] = g
        data[i + 2] = b
        data[i + 3] = a
      })
    }
    const [x0, y0] = this.state.prevPos
    paintCircle(xClick, yClick)

    if (isDragged) {
      const distance = Math.sqrt((xClick - x0) * (xClick - x0) + (yClick - y0) * (yClick - y0))
      const numPoints = Math.floor(distance / 5)
      const dx = x0 - xClick
      const dy = y0 - yClick
      for (let i = 0; i < numPoints; i++) {
        const ratio = i / numPoints
        paintCircle(xClick + (ratio * dx), yClick + (ratio * dy))
      }
    }

    this.setState({
      prevPos: [xClick, yClick]
    })

    return imageData
  }

  saveGame = () => {
    // frames[0] is the null frame
    const frame1Map = this.props.frames[1].map
    const frame2Map = this.props.frames[2].map
    const frame3Map = this.props.frames[3].map
    const frame4Map = this.props.frames[4].map
    const { frame1Img, frame2Img, frame3Img, frame4Img } = this.state
    const frame1Blob = new Blob([frame1Img.data.buffer])
    const frame2Blob = new Blob([frame2Img.data.buffer])
    const frame3Blob = new Blob([frame3Img.data.buffer])
    const frame4Blob = new Blob([frame4Img.data.buffer])
    submitGame({ frame1Blob, frame1Map, frame2Blob, frame2Map, frame3Blob, frame3Map, frame4Blob, frame4Map })
  }

  clearFrame = e => {
    const { activeFrame } = this.state
    this.setBackground(this.state[`frame${activeFrame}Img`])
    this.displayActiveFrame()
  }

  mouseDownHandler = e => {
    if (this.state.fill) {
      this.fill()
    } else {
      this.setState({
        mouseDown: true
      })
      const { offsetX: x, offsetY: y } = e.nativeEvent
      this.updateCanvas(x, y, false)
    }
  }

  mouseUpHandler = e => {
    this.setState({
      mouseDown: false
    })
  }

  mouseMoveHandler = e => {
    if (this.state.mouseDown) {
      const { offsetX: x, offsetY: y } = e.nativeEvent
      this.updateCanvas(x, y, true)
    }
  }

  onMouseLeaveHandler = e => {
    this.setState({
      mouseDown: false
    })
  }

  render () {
    const { canvasHeight, canvasWidth, cursor } = this.state
    const { frame1Img, frame2Img, frame3Img, frame4Img } = this.state
    let style = {}
    if (cursor === 'paint') {
      style = { cursor: 'crosshair' }
    } if (cursor === 'fill') {
      style = { cursor: `url('images/fillbucket-cursor.png'),pointer` }
    }
    return (
      <div className="sheet">
        <div className="sheet-content">
          <div className="colLeft">
            <canvas
              style={style}
              id="drawCanvas"
              ref="canvas"
              width={canvasWidth}
              height={canvasHeight}
              onMouseDown={this.mouseDownHandler}
              onMouseMove={this.mouseMoveHandler}
              onMouseUp={this.mouseUpHandler}
              onMouseLeave={this.onMouseLeaveHandler} />
            <canvas
              ref="canvas2"
              width={canvasWidth}
              height={canvasHeight}
            />
            <div className="controls">
              <Button variant="outline-secondary" onClick={this.clearFrame}>
          Clear
              </Button>
              <Button variant="outline-secondary" onClick={this.saveGame} >
          Save
              </Button>
            </div>
          </div>

          <div className="colRight">
            <Toolbar fillOn={this.fillOn} fillOff={this.fillOff} thumbnails={{ frame1Img, frame2Img, frame3Img, frame4Img }}/>
          </div>
        </div>
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
