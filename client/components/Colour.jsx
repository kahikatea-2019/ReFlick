import React from 'react'

export default function Colour (props) {
  return (
    <div >
      <div style={{ widgth: 10, height: 50, backgroundColor: props.colour }}/>
      <br/>
    </div>
  )
}
