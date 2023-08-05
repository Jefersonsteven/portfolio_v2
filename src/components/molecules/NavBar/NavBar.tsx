'use client'
import './NavBar.scss'
import { Icon } from '@/components/atoms/Icons/Icon'
import en from '@/data/translate/en/data.json'
import es from '@/data/translate/es/data.json'
import { useMenuStore } from '@/store/header'
import { useLanguageStore } from '@/store/language'
import { useThemeStore } from '@/store/theme'
import { toggleMenu } from '@/utilities/toggleMenu'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

export const NavBar = () => {
  const nav = useRef<HTMLDivElement>(null)
  const { menu, setMenu } = useMenuStore()
  const { language, setLanguage } = useLanguageStore()
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    if (nav.current != null) {
      setMenu(nav.current)
    }
  }, [])

  function handleToggleTheme () {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    }
  }

  function handleClick (e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (menu !== null) {
      toggleMenu(menu)
    }

    const language = e.currentTarget.innerText.trim()

    if (language === 'EN' || language === 'ES') {
      if (language === 'EN') {
        setLanguage(es)
      } else {
        setLanguage(en)
      }
    }
  }

  return (
      <nav ref={nav} className="open navbar__container">
        <div className='navbar'>
        <ul className="navbar__list flex">
          {
            language.header.navigation.map(option => (
              <li onClick={handleClick} key={option.href} className="navbar__option navbar__option--hover center">
                <Link href={option.href}>
                  <Icon size={30} name={option.href}/>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="navbar__list flex">
          {
            language.header.social_media.map(social => (
              <li onClick={handleClick} key={social.href} className="navbar__option navbar__option--hover center">
                <Link href={social.href} target='__blank'>
                  <Icon size={30} name={social.title}/>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="navbar__list flex">
            <li onClick={handleClick} className="navbar__option navbar__option--hover center">
              <Icon size={30} name={language.language}/>
            </li>
            <li onClick={(event) => {
              handleClick(event)
              handleToggleTheme()
            }} className="navbar__option navbar__option--hover center">
              <Icon size={30} name={theme}/>
            </li>
        </ul>
        </div>
      </nav>
  )
}
