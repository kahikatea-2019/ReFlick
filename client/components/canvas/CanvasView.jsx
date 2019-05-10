import React from 'react'
import { connect } from 'react-redux'

const CanvasView = props => {
  const { mouseDownHandler, mouseMoveHandler, mouseUpHandler  } = props
  return (
    <canvas
          ref="canvas"
          width={500}
          height={500}
          onMouseDown={mouseDownHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseUpHandler}/>
  )

}

export default connect()(CanvasView)