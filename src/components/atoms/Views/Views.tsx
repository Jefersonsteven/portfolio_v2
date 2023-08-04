'use client'
import views from '@/data/translate/en/data.json'
import { vendingIcons } from '@/utilities/vendingIcons'
import './Views.scss'
import { useFetchIp } from '@/hooks/useIp'

export const Views = () => {
  const { data, isLoading } = useFetchIp()

  return (
      <div className='views'>
        <div className='views views__content'>
          <p>{data?.country}</p>
          <p>{views.header.views}</p>
        </div>
        <div className={isLoading ? 'rotate' : ''}>
          {vendingIcons('earth', 20)}
        </div>
      </div>
  )
}
