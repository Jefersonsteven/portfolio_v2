'use client'
import './index.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguageStore } from '@/store/language'
const Navigation = () => {
  const [route, setRoute] = useState('home')
  const { language } = useLanguageStore()

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
          {
            language.header.navigation.map((option, index) => {
              return (
                <a
                  key={index}
                  onClick={handleRouteChange}
                  href={option.href}
                  className={`circle-nav ${route === option.href.split('#')[1] ? 'circle-nav--active' : 'circle-nav--disable'}`}
                ></a>
              )
            })
          }
        </div>
      </div>
      <nav className="nav__options">
        {
          language.header.navigation.map((option, index) => {
            return (
              <a
                key={index}
                onClick={handleRouteChange}
                className="option"
                href={option.href}
              >
                {option.title}
              </a>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navigation
