import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
      <nav className="nav">
        <a href="/" className='active'>Who Am I ?</a>
        <a href="/about" className='active'>My Projects</a>
        <a href="/contact" className='active'>My Certifications</a>
      </nav>
  )
}
