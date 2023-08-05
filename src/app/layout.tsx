'use client'
import '@/scss/globals.scss'
import '@/scss/variables.scss'
import 'normalize.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { useThemeStore } from '@/store/theme'
import { useLanguageStore } from '@/store/language'

const inter = Inter({ subsets: ['latin'] })
// const montserrat = Montserrat({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useThemeStore()
  const { language: { language } } = useLanguageStore()

  return (
    <ReactQueryProvider>
      <html data-theme={theme === null ? 'dark' : theme} lang={language}>
        <head>
          <title>Jefferson Steven</title>
          <meta name="description" content="'Mi nombre es jeffer steven y soy desarrollador Fullstack web centrado en el Frontend'" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  )
}

export default RootLayout
