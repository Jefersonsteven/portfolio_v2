'use client'
import { Icon } from '@/components/atoms/Icons/Icon'
import './Home.scss'
import Link from 'next/link'
import { useLanguageStore } from '@/store/language'

export const Home = () => {
  const { language } = useLanguageStore()
  return (
    <section id="home" className="home mt px">
      <div className='home__principal'>
        <h2 className="home__subtitle">{language.home.name}</h2>
        <h1 className="home__title">
          <b className='home__rol2'>{language.home.rol[0]}</b>
          <b className='home__rol1'>{language.home.rol[1]}</b>
        </h1>
      </div>
      <div className='home__mouse'>
        <Link href={'#aboutme'}>
          <Icon size={30} name='mouse'/>
        </Link>
      </div>
      <div className='home__arrow'>
        <Link href={'#aboutme'}>
          <Icon size={30} name='arrow'/>
        </Link>
      </div>
    </section>
  )
}
