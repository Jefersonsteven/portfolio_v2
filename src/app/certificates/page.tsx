'use client'
import './page.css'
import BackButton from '@/components/atoms/BackButton/BackButton'
import { Certificates } from '@/components/pages/Certificates/Certificates'

const CertificatesPage = () => {
  return (
    <main className="cetificates-view animate__animated animate__fadeInLeft">
      <div className='cetificates-view__content'>
        <BackButton />
        <Certificates />
      </div>
    </main>
  )
}

export default CertificatesPage
