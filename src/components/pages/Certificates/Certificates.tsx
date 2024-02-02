'use client'
import { useLanguageStore } from '@/store/language'
import './Certificates.css'
import { CertificatesTable } from '@/components/organisms/CertificatesTable/CertificatesTable'
// import { ApiCertificates } from '@/app/api/ip'
// import { dataCertificates } from './data'

export const Certificates = () => {
  const { language } = useLanguageStore()
  return (
    <div className='certificates page'>
      <h1 className='certificates__title title'>
        <b>{language.about_me.certificates}</b>
      </h1>
      {/* <button onClick={handleClick}>create certificate</button> */}
      <div className='certificates__content'>
        <CertificatesTable />
      </div>
    </div>
  )
}

// function handleClick () {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const api = ApiCertificates.post('', {
//     data: dataCertificates
//   }).then(res => { console.log(res.data) })
// }
