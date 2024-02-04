'use client'
import { vendingIcons } from '@/utilities/vendingIcons'
import './Views.css'
import { useFetchViews } from '@/hooks/useView'
import { useLanguageStore } from '@/store/language'

export const Views = () => {
  const { data, isLoading } = useFetchViews()
  const { language } = useLanguageStore()

  return (
    <div className='views tag'>
      <div className='views__content'>
        <p>{data !== undefined ? `${data}` : '0'} {language.header.views}</p>
      </div>
      <div className={isLoading ? 'rotate' : ''}>
        {vendingIcons('earth', 20)}
      </div>
    </div>
  )
}
