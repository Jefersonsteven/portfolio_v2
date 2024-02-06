// import { EmailTemplate } from '@/components/organisms/Email/EmailTemplate'
import { type ContactForm } from '@/types'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY_IP)

export async function sendEmail (form: ContactForm) {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gfreycode@gmail.com'],
      subject: 'Hello world',
      html: '<h1>Hello world</h1>',
      text: 'Hello world'
    })

    return { data }
  } catch (error) {
    return { error }
  }
}
