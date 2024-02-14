'use client'
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import './index.css'
import Image from 'next/image'
import { useLanguageStore } from '@/store/language'

export const About = () => {
  const { language } = useLanguageStore()

  return (
    <section id="about" className="about page pc">
      <header>
        <h2 className="heading">{language.about_me.title}</h2>
      </header>
      <main>
        <section className="about__profile">
          <figure>
            <Image width={300} height={300} src="/assets/images/me.png" alt="jefferson steven" />
          </figure>

          <div className="tags">
            <Link href="/certificates">{language.about_me.certificates}</Link>
            <Link target="__blank" href={language.header.social_media[3].href} rel="noreferrer">CV</Link>
          </div>
        </section>

        <section className="about__info">
          <article>
            <p>{language.about_me.description[0].paragraph}<strong>{language.about_me.description[1].paragraph}</strong>{language.about_me.description[2].paragraph}<strong>{language.about_me.description[3].paragraph}</strong>
              {language.about_me.description[4].paragraph}
            </p>

            <p>
              {language.about_me.description[5].paragraph} {language.about_me.description[6].paragraph}.
            </p>

            <p>
              {language.about_me.description[7].paragraph}
            </p>
          </article>

          <div className="tags-mobile">
            <Link href="/certificates">{language.about_me.certificates}</Link>
            <Link target="__blank" href={language.header.social_media[3].href} rel="noreferrer">CV</Link>
          </div>
        </section>
      </main>
      <figure className="circles">
        <div className="circle-primary" />
      </figure>
    </section>
  )
}
