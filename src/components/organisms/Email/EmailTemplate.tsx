import * as React from 'react'
import './index.css'

interface EmailTemplateProps {
  name: string
  subject: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, subject, email, message
}) => (
  <div style={{
    padding: '32px',
    color: '#f5f5f5',
    backgroundColor: '#0f0c29',
    borderRadius: '16px'
  }}>
    <h1 style={{ padding: '8px' }}><b>Subject: </b>{subject}</h1>
    <h2 style={{ padding: '8px' }}>Email: {email}</h2>
    <h3 style={{ padding: '8px' }}>My name is {name}</h3>
    <p style={{ padding: '8px' }}>{message}</p>
  </div>
)
