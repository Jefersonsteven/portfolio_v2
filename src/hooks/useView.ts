import { type Views } from '@/types'
import { ApiIp, ApiViews } from '../app/api/ip'
import { useQuery } from '@tanstack/react-query'

const fetchIp = async () => {
  const { data } = await ApiIp.get('')
  return data
}

const fetchViews = async () => {
  try {
    const visit = localStorage.getItem('visitPortfolioJefferson')

    if (visit === null) {
      const ip = await fetchIp()
      const data = await ApiViews.post('', {
        data: {
          ...ip
        }
      })

      if (data !== undefined || data !== null) localStorage.setItem('visitPortfolioJefferson', JSON.stringify(true))
    }

    const data = await ApiViews.get<Views>('')
    const views = data.data

    return views
  } catch (error) {
    console.log(error)
  }
}

export const useFetchViews = () => {
  return useQuery({
    queryKey: ['views'],
    queryFn: fetchViews
  })
}
