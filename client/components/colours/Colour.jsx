import React from 'react'
import { Dropdown } from 'react-bootstrap'
import CustomToggle from '../toggle-menu/CustomToggle'
import CustomMenu from '../toggle-menu/CustomMenu'

export default class Colour extends React.Component {
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
    return (
      <div className='colour' style={{ width: 40, height: 40, backgroundColor: colour }} onClick={() => prompt(colour)}>
        <div className='framePick' style={{ width: 15, height: 15, backgroundColor: 'white' }}>{this.state.activeFrame}</div>
      </div>
    )
  }

  render () {
    const colour = this.props.colour
    const frames = this.props.frames

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

// TODO: Need to be able to set an active frame ->
// 1. [X] Refactor component into a class to be able to store via state
// 2. [ ] Check whether a frame is set as active
// 2a. [ ] Default value should be no frame (null)
