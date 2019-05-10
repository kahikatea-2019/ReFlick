import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div className="header">
      <h1>Reflick the remaster we've been waiting for</h1>
      <Link to ='/'>Create!</Link>
      <Link to ='/play'>Play!</Link>
    </div>
  )
}
