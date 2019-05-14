import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-bootstrap'
import CustomToggle from '../../layout/toggle-menu/CustomToggle'
import CustomMenu from '../../layout/toggle-menu/CustomMenu'

import { setBrushColour, updateFrameMap } from '../../../actions/'

class Colour extends React.Component {
  state = {
    frameMap: this.props.target 
  }

  componentDidUpdate(prevProps) {
    const {target, activeFrame} = this.props
    if (target !== prevProps.target) {
      {this.setState({frameMap: this.props.target})}
    }
    else if (activeFrame !== prevProps.activeFrame) {np
      {this.setState({frameMap: this.props.target})}
    }
  }

  returnDropdowns (colour, frames) {
    const { dispatch, activeFrame } = this.props
    return frames.map(frame => {
      return <Dropdown.Item
        onClick={() => {
          {if (frame.name === 'None'){this.setState({ frameMap: null})}} // Special case: Render null for 'None'
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

  checkForZero() {
    if(this.state.frameMap === 0) {
      this.setState({frameMap: null})
    }
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
            {this.checkForZero()}
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
