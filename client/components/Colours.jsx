import React from 'react'
import { connect } from 'react-redux'
import Colour from './Colour'

import Pen from './Pen'

class Colours extends React.Component {
  renderColour (colours, frames) {
    return (
      colours.map(colour =>
        <Colour key={colour} colour={colour} frames={frames} />
      )
    )
  }

  render () {
    const { colours, frames } = this.props
    return (
      <div className = "left">
        <h2> Colours </h2>
        {this.renderColour(colours, frames)}
        <Pen />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    colours: state.coloursReducer.colours,
    frames: state.framesReducer.frames
  }
}

export default connect(mapStateToProps)(Colours)
