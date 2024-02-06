'use client'
import '@/styles/globals.css'
import '@/styles/animations.css'
import 'animate.css'
import '@/styles/variables.css'
import '@/styles/scroll.css'
import 'normalize.css'
import { League_Spartan, Montserrat } from 'next/font/google'
import React, { useState } from 'react'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { useThemeStore } from '@/store/theme'
import { useLanguageStore } from '@/store/language'
import { Mouse } from '@/components/atoms/Mouse/Mouse'
import Image from 'next/image'

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
          <figure className='background'>
            <Image className="background__image" src="/assets/images/galaxy-bg.jpg" alt="background" width={1280} height={874} />
          </figure>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}

export default RootLayout
