'use client'
import 'animate.css'
import '@/scss/globals.scss'
import 'normalize.css'
import '@/scss/variables.scss'
import { Inter, Montserrat } from 'next/font/google'
import React, { useState } from 'react'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { useThemeStore } from '@/store/theme'
import { useLanguageStore } from '@/store/language'
import { Mouse } from '@/components/atoms/Mouse/Mouse'

const inter = Inter({ subsets: ['latin'] })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const montserrat = Montserrat({ subsets: ['latin'] })

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

  function handleMouse (e: React.MouseEvent) {
    if (window.innerWidth > 700) {
      const x = e.clientX
      const y = e.clientY
      setCoordinates({
        x,
        y
      })
    }
  }

  return (
    <ReactQueryProvider>
      <html data-theme={theme === null ? 'dark' : theme} lang={language}>
        <head>
          <title>Jefferson Steven</title>
          <meta name="description" content="'Mi nombre es jeffer steven y soy desarrollador Fullstack web centrado en el Frontend'" />
        </head>
        <body onMouseMove={handleMouse} className={inter.className}>
          {coordinates.x > 0 && coordinates.y > 0 && window.innerWidth > 700 &&
            <Mouse coordinates={coordinates}/>
          }
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}

export default RootLayout
