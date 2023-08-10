'use client'
import { useLanguageStore } from '@/store/language'
import './Contact.scss'
import Link from 'next/link'

export const Contact = () => {
  const { language } = useLanguageStore()
  return (
    <section id='contact' className='contact w-h-full px pt'>
      <h2 className='title'>
        <b>{language.contact.title}</b>
      </h2>
      <div className='contact__content'>
        <Link href={'/'}>{language.contact.content}</Link>
      </div>
    </section>
  )
}
