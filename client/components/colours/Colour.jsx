import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-bootstrap'
import CustomToggle from '../toggle-menu/CustomToggle'
import CustomMenu from '../toggle-menu/CustomMenu'

import { setBrushColour, updateFrameMap } from '../../actions/'

class Colour extends React.Component {
  state = {
    colour: null,
    frameMap: null
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.activeFrame !== prevProps.activeFrame) {
      this.state
      this.setState({frameMap: null})
    }
  }

  returnDropdowns (colour, frames) {
    const { dispatch, activeFrame } = this.props
    return frames.map(frame => {
      return <Dropdown.Item
        onClick={() => {
          console.log('Colour:', colour + '\n' + 'Frame:', frame.id)
          this.setState({ frameMap: frame.id, colour: colour.id })
          dispatch(updateFrameMap(activeFrame, colour.id, frame.id))
        }}
        key={frame.id + colour}>{frame.name}</Dropdown.Item>
    })
  }

  createColour (colour) {
    const { dispatch } = this.props
    return (
      <div className='colour' style={{ width: 40, height: 40, backgroundColor: `rgb(${colour.r},${colour.g},${colour.b})` }}
        onClick={() => { dispatch(setBrushColour(colour)) }}>
        <div className='framePick' style={{ width: 15, height: 15, backgroundColor: 'white' }}>{this.state.frameMap}</div>
      </div>
    )
  }

  render () {
    const { colour, frames } = this.props

    return (
      <React.Fragment>
        <Dropdown>
          {this.createColour(colour)}
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <span className="frameSpan"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu >
            {this.returnDropdowns(colour, frames)}
          </Dropdown.Menu>
        </Dropdown>
        <br/>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return ({
    activeFrame: state.activeFrame
  })
}

export default connect(mapStateToProps)(Colour)

// TODO: Need to be able to set an active frame ->
// 1. [X] Refactor component into a class to be able to store via state
// 2. [ ] Check whether a frame is set as active
// 2a. [ ] Default value should be no frame (null)
