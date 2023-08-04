'use client'
import views from '@/data/translate/en/data.json'
import { vendingIcons } from '@/utilities/vendingIcons'
import './Views.scss'
import { useFetchViews } from '@/hooks/useIp'

export const Views = () => {
  const { data, isLoading } = useFetchViews()

  return (
      <div className='views'>
        <div className='views views__content'>
          <p>{(data != null) ? `${data.total}` : '🔃' }</p>
          <p>{views.header.views}</p>
        </div>
        <div className={isLoading ? 'rotate' : ''}>
          {vendingIcons('earth', 20)}
        </div>
      </div>
  )
}
