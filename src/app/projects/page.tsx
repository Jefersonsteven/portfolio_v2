'use client'
import './page.scss'
import { BackButton } from '@/components/atoms/BackButton/BackButton'
import { MoreProjects } from '@/components/pages/MoreProjects/MoreProjects'

export default function Projects () {
  return (
    <main className="projects-view w-h-full px pt-view">
      <div className='projects-view__content large-gap'>
        <BackButton/>
        <MoreProjects/>
      </div>
    </main>
  )
}
