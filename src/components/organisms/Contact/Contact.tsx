'use client'
import { type ErrorContactForm, type ContactForm } from '@/types'
import './index.css'
import { useState } from 'react'
import { verifyContactForm } from '@/libs/verifyContactForm'
import { useLanguageStore } from '@/store/language'

export const Contact = () => {
  const { language } = useLanguageStore()
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<ErrorContactForm | null>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = verifyContactForm(form)
    if (errors != null) {
      setErrors(errors)
    } else {
      try {
        const send = await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(form)
        })

        const data = await send.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setErrors(verifyContactForm({ ...form, [name]: value }))
  }

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const btn = e.currentTarget
    btn.classList.add('btn-primary--active')
    setTimeout(() => {
      btn.classList.remove('btn-primary--active')
    }, 400)
  }

  return (
    <section id="contact" className="contact page pc">
      <h2 className="heading contact__title">{language.contact.title}</h2>
      <form onSubmit={handleSend as React.FormEventHandler<HTMLFormElement>} className="contact__form">
        <div className="contact__inputs">
          <label>
            {language.contact.form.name.value}
            <input type="text" placeholder={language.contact.form.name.placeholder} onChange={handleChange} name="name" />
            <span>{errors?.name}</span>
          </label>
          <label>
            {language.contact.form.email.value}
            <input type="email" onChange={handleChange} placeholder={language.contact.form.email.placeholder} name="email" />
            <span>{errors?.email}</span>
          </label>
          <label>
            {language.contact.form.subject.value}
            <input type="text" onChange={handleChange} placeholder={language.contact.form.subject.placeholder} name="subject" />
            <span>{errors?.subject}</span>
          </label>
          <label>
            {language.contact.form.message.value}
            <textarea onChange={handleChange} placeholder={language.contact.form.message.placeholder} name="message"></textarea>
            <span>{errors?.message}</span>
          </label>
        </div>
        <label onClick={handleClick} className='contact__button' itemType='button'>
          <div className='contact__button-border'></div>
          <button className="btn btn-primary" title="send">{language.contact.form.send}</button>
        </label>
      </form>
      <figure className="circles">
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
      </figure>
    </section>
  )
}
