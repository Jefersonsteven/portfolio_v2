import './scss/globals.scss'
import 'normalize.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import React from 'react'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'

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
    <ReactQueryProvider>
      <html lang="es" className={montserrat.className}>
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  )
}

export default RootLayout
