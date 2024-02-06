'use client'
import { useLanguageStore } from '@/store/language'
import './index.css'
import { Socials } from '@/components/molecules/Socials/Socials'

export const Footer = () => {
  const { language } = useLanguageStore()
  return (
    <footer className="page footer">
      <a title="home" href="/" className="home-action animate__animated animate__fadeInLeft">
        <div className="logo-container">
          <div className="logo-animate" />
        </div>
        <img src="/assets/images/logo-dynamic.png" alt="Logo" className="logo" />
      </a>

      <p className="copy animate__animated animate__fadeInUpBig">
        <span>
          {language.footer[0]}{' '}
        </span>
        <strong>
          <a target="_blank" href="https://github.com/Jefersonsteven" rel="noreferrer">
            {language.footer[1]}{' '}
          </a>
        </strong>
        <span>
          {language.footer[2]}
        </span>
      </p>

      <Socials />
    </footer>
  )
}
