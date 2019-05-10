import React from 'react'
// import {setFrame} from '../actions/index'

export default function Frame (props) {
  return (
    <div className="frame" onClick={() => {}}>
      <p>{props.frame}</p>
      <br/>
    </div>
  )
}
