'use client'
import { ApiCertificates } from '@/app/api/ip'
import './Certificates.scss'
import { CertificatesTable } from '@/components/organisms/CertificatesTable/CertificatesTable'
import { dataCertificates } from './data'

export const Certificates = () => {
  function handleClick () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const api = ApiCertificates.post('', {
      data: dataCertificates
    }).then(res => { console.log(res.data) })
  }

  return (
    <div className='certificates'>
      <h1 className='certificates__title title'>
        <b>Certificados</b>
      </h1>
      <button onClick={handleClick}>create certificate</button>
      <div className='certificates__content'>
        <CertificatesTable/>
      </div>
    </div>
  )
}
