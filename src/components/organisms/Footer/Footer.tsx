'use client'
import { useLanguageStore } from '@/store/language'
import './Footer.scss'
import Link from 'next/link'
// import Link from 'next/link'

export const Footer = () => {
  const { language } = useLanguageStore()
  return (
    <footer className='footer px'>
        <p className='footer__content'>
          {language.footer[0]}
           <Link
            target='__blank'
            href='https://github.com/Jefersonsteven/portfolio_v2'
            className='footer__link footer__link--hover'
          >
            <strong> {language.footer[1]} </strong>
          </Link>
          {language.footer[2]}
        </p>
    </footer>
  )
}
