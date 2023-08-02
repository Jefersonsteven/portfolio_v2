import './scss/globals.scss'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jefferson Steven',
  description: 'Mi nombre es jeffer steven y soy desarrollador Fullstack web centrado en el Frontend'
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="es" className={montserrat.className}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
