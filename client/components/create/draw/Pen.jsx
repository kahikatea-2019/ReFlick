import React from 'react'
import { connect } from 'react-redux'

import { setBrushSize } from '../../../actions/index'

function Pen (props) {
  return (
    <>
      <div className="pens">
        <h4>Pen Tools</h4>
        <button className='sbutton' onClick={() => {
          props.smallPen()
          props.fillOff()
        }}></button>
        <button className='mbutton'onClick={() => {
          props.medPen()
          props.fillOff()
        }}></button>
        <button className='lbutton' onClick={() => {
          props.largePen()
          props.fillOff()
        }}></button>
        <button className='fill-bucket' onClick={props.fillOn}></button>
      </div>
    </>
  )
}
const mapStateToProps = state => (
  {
    brushColour: state.brush.colour
  })

function mapStateToDispatch (dispatch) {
  return {
    smallPen: () => dispatch(setBrushSize(20)),
    medPen: () => dispatch(setBrushSize(40)),
    largePen: () => dispatch(setBrushSize(60))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Pen)
