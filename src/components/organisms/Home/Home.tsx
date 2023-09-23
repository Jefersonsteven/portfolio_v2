'use client'
import React, { useState, useRef } from 'react'
import { Icon } from '@/components/atoms/Icons/Icon'
import './Home.scss'
import Link from 'next/link'
import { useLanguageStore } from '@/store/language'

export const Home = () => {
  const { language } = useLanguageStore()
  const [draggingElement, setDraggingElement] = useState<HTMLHeadingElement | null>(null)
  const containerRef = useRef(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setDraggingElement(e.target as HTMLHeadingElement)
    e.currentTarget.style.animationName = 'none'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 1130) return
    if (containerRef.current != null && draggingElement != null) {
      const newleft = e.clientX - (containerRef.current as HTMLHeadingElement).getBoundingClientRect().left
      const newTop = e.clientY - (containerRef.current as HTMLHeadingElement).getBoundingClientRect().top

      if (draggingElement.id === 'home__title') {
        draggingElement.style.transform = `translate(${newleft - 473}px, ${newTop - 180}px)`
      } else {
        draggingElement.style.transform = `translate(${newleft - 316}px, ${newTop - 150}px)`
      }
    }
  }

  const handleMouseUp = () => {
    if (draggingElement != null) {
      draggingElement.style.zIndex = 'auto'
      setDraggingElement(null)
    }
  }

  return (
    <section
      id="home"
      className="home px"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={containerRef}
    >
      <div className='home__principal animate__animated animate__fadeInLeft'>
        <h2
          id='home__subtitle'
          className="home__subtitle title"
          onMouseDown={handleMouseDown}
        >
          {language.home.name}
        </h2>
        <h1
          id='home__title'
          className="home__title"
          onMouseDown={handleMouseDown}
        >
          <b className='home__rol2'>{language.home.rol[0]}</b>
          <b className='home__rol1'>{language.home.rol[1]}</b>
        </h1>
      </div>
      <div className='home__mouse'>
        <Link href={'#aboutme'} aria-label='about me'>
          <Icon size={30} name='mouse'/>
        </Link>
      </div>
      <div className='home__arrow' >
        <Link href={'#aboutme'} aria-label='about me'>
          <Icon size={30} name='arrow'/>
        </Link>
      </div>
    </section>
  )
}
