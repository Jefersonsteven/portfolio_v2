'use client'
import { useState } from 'react'

export default function Navigation () {
  const [route, setRoute] = useState('home')

  function handleRouteChange (event: React.MouseEvent<HTMLAnchorElement>) {
    const menu = document.querySelector('.menu')
    menu?.classList.remove('active')
    const route = event.currentTarget.href.split('#')[1]
    setRoute(route)
  }

  return (
    <div className="nav">
      <div className="nav__interaction">
        <div className="line"></div>
        <div className="circles-container">
          <a onClick={handleRouteChange} href="#home" className={`circle-nav ${route === 'home' ? 'circle-nav--active' : 'circle-nav--disable'}`}></a>
          <a onClick={handleRouteChange} href="#about" className={`circle-nav ${route === 'about' ? 'circle-nav--active' : 'circle-nav--disable'}`}></a>
          <a onClick={handleRouteChange} href="#projects" className={`circle-nav ${route === 'projects' ? 'circle-nav--active' : 'circle-nav--disable'}`}></a>
          <a onClick={handleRouteChange} href="#contact" className={`circle-nav ${route === 'contact' ? 'circle-nav--active' : 'circle-nav--disable'}`}></a>
        </div>
      </div>
      <nav className="nav__options">
        <a onClick={handleRouteChange} className="option" href="#home">home</a>
        <a onClick={handleRouteChange} className="option" href="#about">about</a>
        <a onClick={handleRouteChange} className="option" href="#projects">projects</a>
        <a onClick={handleRouteChange} className="option" href="#contact">contact</a>
      </nav>
    </div>
  )
}
