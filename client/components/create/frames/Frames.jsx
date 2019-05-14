import React from 'react'
import { connect } from 'react-redux'
import Frame from './Frame'

class Frames extends React.Component {
  renderFrames (frames, dispatch, thumbnails) {
    return (
      frames.map(frame =>
        <Frame key={frame.id} frame={frame.name} dispatch={dispatch} thumbnail={thumbnails[`frame${frame.id}Img`]} />
      )
    )
  }

  render () {
    const { frames, thumbnails } = this.props
    return (
      <div>
        <h2> Frames </h2>
        {this.renderFrames(frames, this.props.dispatch, thumbnails)}
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
