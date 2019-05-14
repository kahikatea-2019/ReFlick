import React from 'react'

import Frames from './create/frames/Frames'
import Colours from './create/colours/Colours'

export default class Toolbar extends React.Component {
  render () {
    return (
      <div className="Tools">
        <Colours/>
        <Frames update={() => this.render()}/>
      </div>
    )
  }
}
