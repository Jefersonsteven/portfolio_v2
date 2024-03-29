'use client'
import { useLanguageStore } from '@/store/language'
import './index.css'
import SliderProjects from '@/components/organisms/SliderProjects/SliderProjects'

export const Projects = () => {
  const { language } = useLanguageStore()

  return (
    <section id="projects" className="page projects snap-item">
      <h2 className="heading">{language.projects.title}</h2>
      <SliderProjects />
      <figure className="circles">
        <div className="circle-primary" />
      </figure>
    </section>
  )
}
