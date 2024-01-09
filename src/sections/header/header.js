import React from 'react'
import './header.css'
import Navbar from '../../components/navbar/navbar'
import Hero from './hero'

export default function Header() {
  return (
    <div className='header_section'>
      <Navbar/>
      <Hero/>
    </div>
  )
}
