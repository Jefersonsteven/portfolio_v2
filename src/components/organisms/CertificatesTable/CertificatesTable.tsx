'use client'
import { type Certificates } from '@/types'
import './CertificatesTable.scss'
import { ApiCertificates } from '@/app/api/ip'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { vendingIcons } from '@/utilities/vendingIcons'

export const CertificatesTable = () => {
  const [certificates, setCertificates] = useState<Certificates | null>(null)

  async function fetchData () {
    const api = await ApiCertificates.get<Certificates>('')
    setCertificates(api.data)
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Category</th>
          <th>Institution</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {certificates?.map(certificate => (
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
  )
}
