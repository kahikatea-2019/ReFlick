import React from 'react'

import Frames from './create/frames/Frames'
import Colours from './create/colours/Colours'

export default class Toolbar extends React.Component {
  render () {
    return (

      <React.Fragment>
        <div> <Colours/> </div>
        <div><Frames /></div>


      </React.Fragment>
    )
  }
}
