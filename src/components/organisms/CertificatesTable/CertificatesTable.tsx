'use client'
import './CertificatesTable.css'
import { useState } from 'react'
import Link from 'next/link'
import { vendingIcons } from '@/utilities/vendingIcons'
import { useLanguageStore } from '@/store/language'
import { Pagination } from '@/components/molecules/Pagination/Pagination'
import { useFetchCertificates } from '@/hooks/useCertificates'

export const CertificatesTable = () => {
  const { language } = useLanguageStore()
  const [currentPage, setCurrentPage] = useState('1')
  const { data, isLoading, isError } = useFetchCertificates(currentPage)

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
          {data?.certificates?.map(certificate => (
            <tr key={certificate.id}>
              <td>{certificate.name}</td>
              <td>
                <Link target='__blank' as={undefined} href={certificate.url}>
                  {vendingIcons('link', 20)}
                </Link>
              </td>
              <td>{certificate.category}</td>
              <td>{certificate.institution}</td>
              <td>{`
              ${new Date(certificate.date).getUTCDate()} /
              ${new Date(certificate.date).getMonth()} /
              ${new Date(certificate.date).getFullYear()} 
              `}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <span>Loading ...</span>}
      {isError && <span>Not found certificates ...</span>}

      {(data != null) &&
        <Pagination
          page={data.page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data.totalPages}
        />
      }
    </>
  )
}
