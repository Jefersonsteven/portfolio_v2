'use client'
import { useLanguageStore } from '@/store/language'
import './Footer.scss'
// import Link from 'next/link'

export const Footer = () => {
  const { language } = useLanguageStore()
  return (
    <footer className='footer px'>
        <p className='footer__content'>{language.footer}</p>
    </footer>
  )
}
