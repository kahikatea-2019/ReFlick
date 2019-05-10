import React from 'react'
import {setFrame} from '../actions/index'

export default function Frame (props) {
  return (
    <div className="frame" onClick={() => props.dispatch(setFrame(props.frame))}>
      <p>{props.frame}</p>
      <br/>
    </div>
  )
}
