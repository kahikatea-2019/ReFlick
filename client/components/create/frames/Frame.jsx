import React from 'react'
import { setFrame } from '../../../actions'
import { connect } from 'react-redux'

import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../canvas/canvasSizeData'

class Frame extends React.Component {
  componentDidMount () {
    this.updateThumbnail()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.thumbnail !== this.props.thumbnail) {
      this.updateThumbnail()
      console.log('changed!')
    }
  }

  updateThumbnail = () => {
    const { thumbnail, frame } = this.props
    console.log('updating', thumbnail)
    const context = this.refs[`thumbnail${frame}`].getContext('2d')
    console.log(context)
    context.putImageData(thumbnail, 0, 0)
    console.log(context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT))
  }

  render () {
    const { setFrame, frame, update } = this.props
    return (
      <div className="frame" onClick={() => {
        setFrame(frame)
        update()
      }}>
        <p>{frame}</p>
        <br/>
        <canvas
          ref={`thumbnail${frame}`}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}>
        </canvas>
      </div>
    )
  }
}

function mapsStateToDispatch (dispatch) {
  return {
    setFrame: (frame) => dispatch(setFrame(frame))
  }
}

export default connect(null, mapsStateToDispatch)(Frame)
