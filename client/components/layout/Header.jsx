import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <>
      <h1 className="title">REFLICK</h1>
      <div className='header-children'>
        <Link to ='/'>Create!</Link>
        <Link to ='/play'>Play!</Link>
      </div>
    </>
  )
}
