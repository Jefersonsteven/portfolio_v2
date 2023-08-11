'use client'
import { useLanguageStore } from '@/store/language'
import './AboutMe.scss'
import Link from 'next/link'
import Image from 'next/image'
import { IconTag } from '@/components/molecules/IconTag/IconTag'

export const AboutMe = () => {
  const { language } = useLanguageStore()

  return (
    <section id="aboutme" className='aboutme w-h-full large-gap px pt'>
      <h2 className='title'>
        <b>{language.about_me.title}</b>
      </h2>
      <div className='aboutme__content small-gap'>
        <div className='aboutme__perfil small-gap'>
          <Image
            priority={true}
            width={168}
            height={168}
            src='/assets/images/Me.png'
            alt='Jefferson Steven, Jeffer Steven'
            className='aboutme__photo'
          />
          <div className='aboutme__tags small-gap'>
            <IconTag name={language.about_me.country}/>
            <div className='aboutme__tag'>
              <p>{language.about_me.native_language}</p>
            </div>
            <div className='aboutme__tag'>
              <p>{language.about_me.second_language}</p>
            </div>
          </div>
        </div>
        <div className='aboutme__info'>
          <article className='aboutme__description small-gap'>
            {language.about_me.description.map(content => (
            <p
              key={content.id}
              className='paragraph'
            >
              {content.paragraph}
            </p>
            ))}
          </article>
          <Link className='aboutme__certificates paragraph' href='/certificates'>
            <b>{language.about_me.certificates}</b>
            <p>...</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
