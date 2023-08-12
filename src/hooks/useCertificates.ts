import { type Certificates } from '@/types'
import { ApiCertificates } from '../app/api/ip'
import { useQuery } from '@tanstack/react-query'

const fetchCertificates = async (page: string) => {
  try {
    const { data } = await ApiCertificates.get<Certificates>(`/?page=${page}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const useFetchCertificates = (page: string) => {
  return useQuery({
    queryKey: ['certificates', page],
    queryFn: async () => await fetchCertificates(page)
  })
}
