import * as React from 'react'

interface EmailTemplateProps {
  name: string
  subject: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, subject, email, message
}) => (
  <div>
    <h1><b>Subject: </b>{subject}</h1>
    <p>My name is {name}</p>
    <p>{message}</p>
  </div>
)
