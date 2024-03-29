'use client'
import { ArrowHome } from '@/components/atoms/ArrowHome/ArrowHome'
import './home.css'
import { useLanguageStore } from '@/store/language'

export const Home = () => {
  const { language } = useLanguageStore()

  return (
    <section id='home' className="home page pc snap-item">
      <figure>
        <div className="circle-primary" />
        <div className="circle-secondary" />
      </figure>
      <main>
        <h1 className="title animate__animated animate__fadeInLeft">{language.home.heading[0].split(' ')[0]}<br /> {language.home.heading[0].split(' ')[1]}</h1>
        <h2 className="home__subtitle animate__animated animate__fadeInRight">
          {language.home.subheading}
        </h2>
      </main>
      <footer>
        <ArrowHome />
      </footer>
    </section>
  )
}
