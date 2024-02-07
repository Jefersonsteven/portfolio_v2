// import { EmailTemplate } from '@/components/organisms/Email/EmailTemplate'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY_IP)

// export async function POST () {
//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['gfreycode@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'Jefferson' }),
//       text: 'Hello world'
//     })

//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error })
//   }
// }
