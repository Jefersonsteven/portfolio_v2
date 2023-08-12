'use client'
import { type Certificates } from '@/types'
import './CertificatesTable.scss'
import { ApiCertificates } from '@/app/api/ip'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { vendingIcons } from '@/utilities/vendingIcons'
import { useLanguageStore } from '@/store/language'

export const CertificatesTable = () => {
  const [certificates, setCertificates] = useState<Certificates | null>(null)
  const { language } = useLanguageStore()

  async function fetchData () {
    const api = await ApiCertificates.get<Certificates>('/?page=2')
    setCertificates(api.data)
  }

  function handlePaginate () {}

  function handleNavigationNext () {}

  function handleNavigationBack () {}

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>{language.certificates.title}</th>
            <th>{language.certificates.link}</th>
            <th>{language.certificates.category}</th>
            <th>{language.certificates.institution}</th>
            <th>{language.certificates.date}</th>
          </tr>
        </thead>
        <tbody>
          {certificates?.certificates?.map(certificate => (
            <tr key={certificate.id}>
              <td>{certificate.name}</td>
              <td>
                <Link target='__blank' as={undefined} href={certificate.url}>
                  {vendingIcons('link', 20)}
                </Link>
              </td>
              <td>{certificate.category}</td>
              <td>{certificate.institution}</td>
              <td>{certificate.date.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='table__navigation'>
        <button onClick={handleNavigationBack} className='table__button table__button--navigation'>
          {vendingIcons('arrow-back', 20)}
        </button>
        {(certificates != null) &&
          <div className='table__pagination'>
            {certificates?.page === certificates.totalPages && certificates.page - 2 !== 0 &&
              <button onClick={handlePaginate} className='table__button'>{certificates?.page - 2}</button>
            }
            {certificates?.page !== 1 &&
              <button onClick={handlePaginate} className='table__button'>{certificates?.page - 1}</button>
            }
            {certificates?.page > 0 &&
              <button onClick={handlePaginate} className='table__button table__button--current'>{certificates?.page}</button>
            }
            {certificates?.page < certificates.totalPages &&
              <button onClick={handlePaginate} className='table__button'>{certificates?.page + 1}</button>
            }
            {certificates?.page - 1 === 0 && certificates?.page + 2 <= certificates.totalPages &&
              <button onClick={handlePaginate} className='table__button'>{certificates?.page + 2}</button>
            }
          </div>
        }
        <button onClick={handleNavigationNext} className='table__button table__button--navigation'>
          {vendingIcons('arrow-next', 20)}
        </button>
      </div>
    </>
  )
}
