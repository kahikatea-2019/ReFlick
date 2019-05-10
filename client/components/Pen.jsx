import React from 'react'
import Button from 'react-bootstrap'

export default function Pen () {
  const smallPen = () => {
    alert('small pen')
  }
  const medPen = () => {
    alert('med pen')
  }
  const largePen = () => {
    alert('large pen')
  }

  return (
    <>
      <h3>Pens</h3>
      <button className='sbutton' onClick={smallPen}></button>
      <button onClick={medPen}></button>
      <button className='lbutton' onClick={largePen}></button>
    </>
  )
}
