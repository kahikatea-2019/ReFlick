import React from 'react'
import { connect } from 'react-redux'
import Colour from './Colour'

class Colours extends React.Component {
  renderColour (colours) {
    return (
      colours.map(colour =>
        <Colour key={colour} colour={colour} />
      )
    )
  }

  render () {
    const { colours } = this.props
    return (
      <div className = "left">
        <h2> Colours </h2>
        {this.renderColour(colours)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    colours: state.coloursReducer.colours
  }
}

export default connect(mapStateToProps)(Colours)
