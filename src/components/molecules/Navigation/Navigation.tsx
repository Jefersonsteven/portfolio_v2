'use client'
import './index.css'
import React, { useState } from 'react'
import { useLanguageStore } from '@/store/language'
const Navigation = () => {
  const [route, setRoute] = useState('home')
  const { language } = useLanguageStore()

  const handleRouteChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const menu = document.querySelector('.menu')
    menu?.classList.remove('active')
    setRoute(event.currentTarget.href.split('#')[1])
  }

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
