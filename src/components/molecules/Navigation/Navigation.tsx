'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const Navigation = () => {
  const [route, setRoute] = useState(window.location.pathname === '/' ? 'home' : window.location.pathname.split('#')[1])

  const handleRouteChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const menu = document.querySelector('.menu')
    menu?.classList.remove('active')
    setRoute(event.currentTarget.href.split('#')[1])
  }

  const handleResize = () => {
    const pathname = window.location.pathname
    if (window.innerWidth > 1130 && pathname === '/') {
      router.push('/#home')
      setRoute('home')
    }
  }

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const body = document.documentElement

    if (body === null) return
    const { pathname } = window?.location
    const handleScroll = (e: WheelEvent) => {
      if (pathname === '/') {
        if (e.deltaY > 0) {
          body.scrollBy({
            left: body.offsetWidth,
            behavior: 'smooth'
          })
        } else {
          body.scrollBy({
            left: -body.offsetWidth,
            behavior: 'smooth'
          })
        }
      }
    }

    body?.addEventListener('wheel', handleScroll)
  }, [])

  return (
    <div className="nav">
      <div className="nav__interaction">
        <div className="line" />
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

export default Navigation
