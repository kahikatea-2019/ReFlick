import React from 'react'
import { connect } from 'react-redux'
import Frame from './Frame'

import Pen from '../draw/Pen'

class Frames extends React.Component {
  renderFrames (frames, dispatch) {
    return (
      frames.map(frame =>
        <Frame key={frame.id} frame={frame.name} dispatch={dispatch} />
      )
    )
  }

  render () {
    const { frames } = this.props
    return (
      <div className="frames-pen">
        <div className="frames">
          <h4> Frames </h4>
          {this.renderFrames(frames, this.props.dispatch)}
          <br/>
        </div>

        <Pen />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    frames: state.framesReducer
  }
}

export default connect(mapStateToProps)(Frames)
