import React from 'react'
import { connect } from 'react-redux'

import { setBrushSize } from '../../../actions/index'

function Pen (props) {
  return (
    <>
      <div className="pens">
        <h4>Pens</h4>
        <button className='sbutton' onClick={props.smallPen}></button>
        <button className='mbutton'onClick={props.medPen}></button>
        <button className='lbutton' onClick={props.largePen}></button>
      </div>
    </>
  )
}

function mapStateToDispatch (dispatch) {
  return {
    smallPen: () => dispatch(setBrushSize(10)),
    medPen: () => dispatch(setBrushSize(20)),
    largePen: () => dispatch(setBrushSize(30))
  }
}

export default connect(null, mapStateToDispatch)(Pen)
