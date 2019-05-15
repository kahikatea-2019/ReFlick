import React from 'react'
import { connect } from 'react-redux'

import Colour from './Colour'

class Colours extends React.Component {
  state = {
    targetFrames: this.props.targetFrames
  }

  componentDidUpdate (prevProps) {
    const { activeFrame } = this.props
    if (activeFrame !== prevProps.activeFrame) {
      this.setState({
        targetFrames: this.props.targetFrames
      })
    }
  }

  renderColour (colours, frames) {
    return (
      colours.map((colour, index) => {
        index = index + 1
        return <Colour key={`rgb(${colour.r},${colour.g},${colour.b})`} colour={colour} frames={frames}
          target={this.state.targetFrames[`col${index}`]} update={() => this.render()}/>
      })
    )
  }

  render () {
    const { colours, frames } = this.props
    return (
      <div className="colours">
        <h4> Colours </h4>
        {this.renderColour(colours, frames)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    colours: state.coloursReducer.colours,
    frames: state.framesReducer,
    activeFrame: state.activeFrame,
    targetFrames: state.framesReducer[state.activeFrame].map
  }
}

export default connect(mapStateToProps)(Colours)
