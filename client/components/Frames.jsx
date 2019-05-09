import React from 'react'
import { connect } from 'react-redux'
import Frame from './Frame'

class Frames extends React.Component {
  renderFrames (frames) {
    return (
      frames.map(frame =>
        <Frame key={frame.id} frame={frame.name} />
      )
    )
  }

  render () {
    const { frames } = this.props
    return (
      <div className = "right">
        <h2> Frames </h2>
        {this.renderFrames(frames)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    frames: state.framesReducer.frames
  }
}

export default connect(mapStateToProps)(Frames)