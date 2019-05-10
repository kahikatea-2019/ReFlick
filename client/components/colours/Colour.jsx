import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-bootstrap'
import CustomToggle from '../toggle-menu/CustomToggle'
import CustomMenu from '../toggle-menu/CustomMenu'

import { setBrushColour } from '../../actions/'

class Colour extends React.Component {
  state = {
    activeFrame: '0'
  }

  returnDropdowns (colour, frames) {
    return frames.map(frame => {
      return <Dropdown.Item
        onClick={() => {
          console.log('Colour:', colour + '\n' + 'Frame:', frame.id)
          this.setState({ activeFrame: frame.id.toString() })
        }}
        key={frame.id + colour}>{frame.name}</Dropdown.Item>
    })
  }

  createColour (colour) {
    const { dispatch } = this.props
    return (
      <div className='colour' style={{ width: 40, height: 40, backgroundColor: `rgb(${colour.r},${colour.g},${colour.b})` }}
        onClick={() => { dispatch(setBrushColour(colour)) }}>
        <div className='framePick' style={{ width: 15, height: 15, backgroundColor: 'white' }}>{this.state.activeFrame}</div>
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

export default connect()(Colour)

// TODO: Need to be able to set an active frame ->
// 1. [X] Refactor component into a class to be able to store via state
// 2. [ ] Check whether a frame is set as active
// 2a. [ ] Default value should be no frame (null)
