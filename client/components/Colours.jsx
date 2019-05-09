import React from 'react'
import { connect } from 'react-redux'
import Colour from './Colour'

class Colours extends React.Component {
  renderColour (colours, frames) {
    return (
      colours.map(colour =>
        <Colour key={`rgb(${colour.r},${colour.g},${colour.b})`} colour={colour} frames={frames} />
      )
    )
  }

  render () {
    const { colours, frames } = this.props
    return (
      <div className = "left">
        <h2> Colours </h2>
        {this.renderColour(colours, frames)}
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
