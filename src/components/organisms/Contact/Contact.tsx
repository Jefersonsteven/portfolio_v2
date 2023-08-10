'use client'
import { useLanguageStore } from '@/store/language'
import './Contact.scss'
import Link from 'next/link'
import { Icon } from '@/components/atoms/Icons/Icon'

export const Contact = () => {
  const { language } = useLanguageStore()
  return (
    <section id='contact' className='contact w-h-full px pt'>
      <h2 className='title'>
        <b>{language.contact.title}</b>
      </h2>
      <div className='contact__content contact__content--hover'>
        <Link as={undefined} target='__blank' href={'mailto:jeffersonstevenx@gmail.com'}>{language.contact.content}</Link>
      </div>
      <div className='contact__socials'>
        <div className='contact__socials-content'>
          {
            language.header.social_media.map(social => (
              <li key={social.href} className="navbar__option navbar__option--hover center">
                <Link as={undefined} href={social.href} target='__blank' aria-label={social.title}>
                  <Icon size={30} name={social.title}/>
                </Link>
                <span className='navbar__arial'>{social.title}</span>
              </li>
            ))
          }
        </div>
      </div>
    </section>
  )
}
