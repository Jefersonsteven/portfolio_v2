'use client'
import { ApiCertificates } from '@/app/api/ip'
import './Certificates.scss'
import { CertificatesTable } from '@/components/organisms/CertificatesTable/CertificatesTable'

export const Certificates = () => {
  function handleClick () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const api = ApiCertificates.post('', {
      data: [
        {
          name: 'full stack web developer',
          url: 'https://certificates.soyhenry.com/new-cert?id=e80263223a951d8dfb622f92864f24bb5723134e2c0ccf23a298e161e0a51ba9',
          category: 'development',
          institution: 'henry',
          date: new Date()
        }
      ]
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
