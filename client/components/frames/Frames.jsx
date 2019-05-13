import React from 'react'
import {connect} from 'react-redux'
import Frame from './Frame'

class Frames extends React.Component {
  renderFrames (frames, dispatch) {
    return (
      frames.map(frame => {
        if (frame.name !== 'None') {
          return <Frame key={frame.id} frame={frame.name} dispatch={dispatch} />
        }
      })
    )
  }

  render () {
    const {frames} = this.props
    return (
      <div className = "right">
        <h2> Frames </h2>
        {this.renderFrames(frames, this.props.dispatch)}
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
