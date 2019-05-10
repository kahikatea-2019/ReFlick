import React from 'react'
import { connect } from 'react-redux'
import Colour from './Colour'
import { getGamesData } from '../api/games'

class Colours extends React.Component {
  renderColour (colours, frames) {
    return (
      colours.map(colour =>
        <Colour key={colour} colour={colour} frames={frames} />
      )
    )
  }

  componentDidMount () {
    return getGamesData(1)
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
