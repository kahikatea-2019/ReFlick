import React from 'react'
import { connect } from 'react-redux'

import { setBrushSize } from '../../../actions/index'

function Pen (props) {
  return (
    <>
      <div className="pens">
        <h4>Pen Tools</h4>

        <button className='sbutton' onClick={props.smallPen}></button>
        <button className='mbutton'onClick={props.medPen}></button>
        <button className='lbutton' onClick={props.largePen}></button>
        <button className='fill-bucket' onClick={props.fill}></button>
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
    smallPen: () => dispatch(setBrushSize(10)),
    medPen: () => dispatch(setBrushSize(20)),
    largePen: () => dispatch(setBrushSize(30))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Pen)
