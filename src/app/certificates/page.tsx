'use client'
import './page.scss'
import BackButton from '@/components/atoms/BackButton/BackButton'
import { Certificates } from '@/components/pages/Certificates/Certificates'

export default function CertificatesPage () {
  return (
    <main className="cetificates-view w-h-full px pt-view  animate__animated animate__fadeInLeft">
      <div className='cetificates-view__content large-gap'>
        <BackButton />
        <Certificates />
      </div>
    </main>
  )
}
