'use client'
import '@/styles/globals.css'
import 'animate.css'
import '@/styles/variables.css'
import '@/styles/scroll.scss'
import 'normalize.css'
import { League_Spartan, Montserrat } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { useThemeStore } from '@/store/theme'
import { useLanguageStore } from '@/store/language'
import { Mouse } from '@/components/atoms/Mouse/Mouse'

const montserrat = Montserrat({ subsets: ['latin'] })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const leguaeSpartan = League_Spartan({ subsets: ['latin'] })
interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useThemeStore()
  const { language: { language } } = useLanguageStore()
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0
  })

  const handleMouse = (e: React.MouseEvent) => {
    if (window.innerWidth > 700) {
      const x = e.clientX
      const y = e.clientY
      setCoordinates({
        x,
        y
      })
    }
  }

  useEffect(() => {
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

    return () => {
      body?.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <ReactQueryProvider>
      <html data-theme={theme === null ? 'dark' : theme} lang={language}>
        <head>
          <title>Jefferson Steven</title>
          <meta name="description" content="'Mi nombre es jeffer steven y soy desarrollador Fullstack web centrado en el Frontend'" />
        </head>
        <body onMouseMove={handleMouse} className={`${montserrat.className} body`}>
          {coordinates.x > 0 && coordinates.y > 0 && window.innerWidth > 700 &&
            <Mouse coordinates={coordinates} />
          }
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}

export default RootLayout
