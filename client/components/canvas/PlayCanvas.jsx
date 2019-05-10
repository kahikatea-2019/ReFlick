import React from 'react'
import { connect } from 'react-redux'

export default class PlayCanvas extends React.Component {
  render () {
    return (
      <div>
        <canvas
          ref="canvas"
          width={500}
          height={500}>
        </canvas>
      </div>
    )
  }
}
