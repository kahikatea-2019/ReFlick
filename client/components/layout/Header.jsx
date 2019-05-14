import React from 'react'
import { Link } from 'react-router-dom'


export default function Header () {
  return (
    <div className="header">
      <div className="title"> REFLICK </div>
      <div className="nav" >
        <Link to ='/'>Create!</Link>
        <Link to ='/play'>Play!</Link>
      </div>
    </div>
  )
}
