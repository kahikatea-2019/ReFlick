import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import CustomMenu from './CustomMenu'

import { setBrushColour } from '../actions/'

function Colour (props) {
  const { dispatch, colour } = props
  return (
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <div
            className='colour'
            onClick={() => { dispatch(setBrushColour(colour)) }}
            style={{ width: 30, height: 30, backgroundColor: `rgb(${colour.r},${colour.g},${colour.b})` }}>
            <Dropdown.Menu as={CustomMenu}>
              {returnDropdowns(props.colour, props.frames)}
            </Dropdown.Menu>
          </div>
        </Dropdown.Toggle>
      </Dropdown>
      <br/>
    </React.Fragment>
  )
}

export default connect()(Colour)

// TODO: Need to be able to set an active frame ->
// 1. Refactor component into a class to be able to store via state
// 2. Check whether a frame is set as active
// 2a. Default value should be no frame (null)
function returnDropdowns (colour, frames) {
  return frames.map(frame => {
    return <Dropdown.Item onClick={() => console.log('Colour:', colour + '\n' + 'Frame:', frame.id)} key={frame.id}>{frame.name}</Dropdown.Item>
  })
}
