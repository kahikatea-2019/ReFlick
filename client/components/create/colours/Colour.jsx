import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-bootstrap'
import CustomToggle from '../../layout/toggle-menu/CustomToggle'

import { setBrushColour, updateFrameMap } from '../../../actions/'

class Colour extends React.Component {

  returnDropdowns (colour, frames) {
    const { dispatch, activeFrame } = this.props
    return frames.map(frame => {
      return <Dropdown.Item
        onClick={() => {
          if (frame.id === 0) { // Special case for null
            dispatch(updateFrameMap(activeFrame, colour.id, null))
          } else {
            dispatch(updateFrameMap(activeFrame, colour.id, frame.id))
          }
        }}
        key={frame.id + colour}>{frame.name}
      </Dropdown.Item>
    })
  }

  createColour (colour) {
    const { dispatch, target } = this.props
    return (
      <div className='colour' style={{ width: 40, height: 40, backgroundColor: `rgb(${colour.r},${colour.g},${colour.b})` }}
        onClick={() => { dispatch(setBrushColour(colour)) }}>
        <div className='framePick' style={{ width: 15, height: 15, backgroundColor: 'white' }}>{target}</div>
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
            {/* {this.checkForZero()} */}
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
