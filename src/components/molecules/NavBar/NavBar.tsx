'use client'
import './NavBar.scss'
import { Icon } from '@/components/atoms/Icons/Icon'
import data from '@/data/translate/en/data.json'
import { useMenuStore } from '@/store/header'
import { toggleMenu } from '@/utilities/toggleMenu'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const NavBar = () => {
  const nav = useRef<HTMLDivElement>(null)
  const { menu, setMenu } = useMenuStore()

  useEffect(() => {
    if (nav.current != null) {
      setMenu(nav.current)
    }
  }, [])

  function handleClick () {
    if (menu !== null) {
      toggleMenu(menu)
    }
  }

  return (
      <nav ref={nav} className="navbar open">
        <ul className="navbar__list flex">
          {
            data.header.navigation.map(option => (
              <li onClick={handleClick} key={option.href} className="navbar__option center">
                <Link href={option.href}>
                  <Icon size={30} name={option.href}/>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="navbar__list flex">
          {
            data.header.social_media.map(social => (
              <li onClick={handleClick} key={social.href} className="navbar__option center">
                <Link href={social.href} target='__blank'>
                  <Icon size={30} name={social.title}/>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="navbar__list flex">
            <li onClick={handleClick} className="navbar__option center">
              <Icon size={30} name={'en'}/>
            </li>
            <li onClick={handleClick} className="navbar__option center">
              <Icon size={30} name={'theme dark'}/>
            </li>
        </ul>
      </nav>
  )
}
