import React from 'react'
import { setFrame } from '../../actions'
import { connect } from 'react-redux'

function Frame (props) {
  const { setFrame, frame } = props
  return (
    <div className="frame" onClick={() => setFrame(frame)}>
      <p>{props.frame}</p>
      <br/>
    </div>
  )
}

function mapsStateToDispatch (dispatch) {
  return {
    setFrame: (frame) => dispatch(setFrame(frame))
  }
}

export default connect(null, mapsStateToDispatch)(Frame)
