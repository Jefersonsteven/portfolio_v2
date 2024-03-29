import { EmailTemplate } from '@/components/organisms/Email/EmailTemplate'
import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'
import { type ContactForm } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY_IP)

export async function POST (request: NextRequest) {
  const { name, email, subject, message }: ContactForm = await request.json()

  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gfreycode@gmail.com'],
      subject: `${subject}`,
      react: EmailTemplate({ name, subject, email, message }),
      text: 'Hi!, Jefferson 😊'
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
