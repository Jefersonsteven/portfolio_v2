'use client'
import { type ErrorContactForm, type ContactForm } from '@/types'
import './index.css'
import { useState } from 'react'
import { verifyContactForm } from '@/libs/verifyContactForm'

export const Contact = () => {
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
      <h2 className="heading contact__title">CONTACT</h2>
      <form onSubmit={handleSend as React.FormEventHandler<HTMLFormElement>} className="contact__form">
        <div className="contact__inputs">
          <label>
            Name
            <input type="text" placeholder="Pepito" onChange={handleChange} name="name" />
            <span>{errors?.name}</span>
          </label>
          <label>
            Email
            <input type="email" onChange={handleChange} placeholder="pepito@email.com" name="email" />
            <span>{errors?.email}</span>
          </label>
          <label>
            Subject
            <input type="text" onChange={handleChange} placeholder="Colaboración" name="subject" />
            <span>{errors?.subject}</span>
          </label>
          <label>
            Message
            <textarea onChange={handleChange} placeholder="Message ..." name="message"></textarea>
            <span>{errors?.message}</span>
          </label>
        </div>
        <label onClick={handleClick} className='contact__button' itemType='button'>
          <div className='contact__button-border'></div>
          <button className="btn btn-primary" title="send"> Send</button>
        </label>
      </form>
      <figure className="circles">
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
      </figure>
    </section>
  )
}
