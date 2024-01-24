'use client'
import Navigation from '@/components/molecules/Navigation/Navigation'
import './index.css'
import { useRef } from 'react'

export const Header = () => {
  const menu = useRef<HTMLDivElement>(null)

  function handleSwitchMenu () {
    menu.current?.classList.toggle('active')
  }
  return (
    <header id="home" className="page header">
      <div className="nav-container">
        <button onClick={handleSwitchMenu} className="reset-button">
          <img src="/assets/svgs/menu.svg" alt="menu" />
        </button>

        <div ref={menu} className="menu page">
          <div className="switch-container">
            <button onClick={handleSwitchMenu} className="reset-button">
              <img src="/assets/svgs/close.svg" alt="menu" />
            </button>
          </div>

          <Navigation />
        </div>
      </div>

      <div>
        <button
          aria-describedby="configuration"
          title="Configuration"
          className="reset-button"
        >
          <img src="/assets/svgs/settings.svg" alt="configuration" />
        </button>
      </div>
    </header>
  )
}
