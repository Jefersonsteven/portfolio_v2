'use client'
import Navigation from '@/components/molecules/Navigation/Navigation'
import './index.css'
import { useRef } from 'react'
import { Views } from '@/components/atoms/Views/Views'

export const Header = () => {
  const menu = useRef<HTMLDivElement>(null)

  const handleSwitchMenu = () => {
    menu.current?.classList.toggle('active')
  }
  return (
    <header className="page header">
      <div className="nav-container">
        <button
          type='button'
          onClick={handleSwitchMenu}
          className="reset-button"
        >
          <img src="/assets/svgs/menu.svg" alt="menu" />
        </button>

        <div ref={menu} className="menu page">
          <div className="switch-container">
            <button
              type='button'
              onClick={handleSwitchMenu}
              className="reset-button"
            >
              <img src="/assets/svgs/close.svg" alt="menu" />
            </button>
          </div>

          <Navigation />
        </div>
      </div>

      <div className='header__content'>
        <Views />
        <button
          type='button'
          aria-describedby="configuration"
          title="Configuration"
          className="reset-button animate__animated animate__fadeInRight"
        >
          <img src="/assets/svgs/settings.svg" alt="configuration" />
        </button>
      </div>
    </header>
  )
}
