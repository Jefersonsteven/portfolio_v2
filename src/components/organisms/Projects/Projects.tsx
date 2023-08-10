'use client'
import { useLanguageStore } from '@/store/language'
import './Projects.scss'
import { CardProject } from '@/components/molecules/CardProyect/CardProject'
import Link from 'next/link'
export const Projects = () => {
  const { language } = useLanguageStore()
  return (
    <section id='projects' className='projects w-h-full px pt large-gap'>
      <h2 className='title'>
        <b className='projects__title'>{language.projects.title}</b>
      </h2>
      <div className='projects__content small-gap'>
        {language.projects.data.map(project => (
          <div className='projects__project' key={project.id}>
            <CardProject project={project}/>
          </div>
        )).reverse()}
      </div>
      <Link
        prefetch={false}
        href={'/projects'}
        className='projects__more paragraph'
       >
        <b>{language.more_projects.title} ...</b>
      </Link>
    </section>
  )
}
