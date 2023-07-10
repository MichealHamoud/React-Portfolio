import React from 'react'
import './header.css'
import CTA from './CTA'
// this should be a photot of me but ill add it later
import ME from '../../assets/Metro-Boomin-Spider-Man.webp'

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Micheal Hamoud</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

      <div className="me">
        <img src={ME} alt="me" />
      
      <a href="#contact" className='scroll__down'>Scroll down</a>
      

      </div>
    </header>
  )
}

export default Header