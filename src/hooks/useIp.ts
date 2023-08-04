import { type Pagination, type Views } from '@/types'
import { ApiIp, ApiViews } from './../app/api/ip'
import { useQuery } from '@tanstack/react-query'

const fetchIp = async () => {
  const { data } = await ApiIp.get('')
  return data
}

const fetchViews = async () => {
  const ip = await fetchIp()
  const ipdata = ip.data
  console.log(ipdata)

  const data = await ApiViews.get('')
  const views: Views = data.data

  const pagination: Pagination = views.meta.pagination
  return pagination
}

export const useFetchViews = () => {
  return useQuery<Pagination>({
    queryKey: ['views'],
    queryFn: fetchViews
  })
}
