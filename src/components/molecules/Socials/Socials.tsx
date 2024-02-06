'use client'
import { useLanguageStore } from '@/store/language'
import { vendingIcons } from '@/utilities/vendingIcons'

export const Socials = () => {
  const { language } = useLanguageStore()
  return (
    <nav className="socials animate__animated animate__fadeInRight">
      {
        language.header.social_media.map((option, index) => {
          return (
            <a
              key={index}
              className="social-option"
              target="_blank"
              href={option.href}
              aria-label={option.title}
              title={option.title} rel="noreferrer"
            >
              {vendingIcons(option.title, 30)}
            </a>
          )
        })
      }
    </nav>
  )
}
