import { ApiIp } from './../app/api/ip'
import { useQuery } from '@tanstack/react-query'

const fetchIp = async () => {
  const { data } = await ApiIp.get('')
  return data
}

interface Ip {
  ip: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
}

export const useFetchIp = () => {
  return useQuery<Ip>({
    queryKey: ['ip'],
    queryFn: fetchIp
  })
}
