import { type ErrorContactForm, type ContactForm } from '@/types'

export const verifyContactForm = (data: ContactForm) => {
  const { name, email, subject, message } = data

  const errors: ErrorContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  if (name.length === 0) {
    errors.name = 'Name is required'
  }
  if (email.length === 0) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid'
  }
  if (subject.length === 0) {
    errors.subject = 'Subject is required'
  }
  if (message.length === 0) {
    errors.message = 'Message is required'
  }

  if ((errors.name.length > 0) || (errors.email.length > 0) || (errors.subject.length > 0) || (errors.message.length > 0)) {
    return errors
  }
  return null
}
