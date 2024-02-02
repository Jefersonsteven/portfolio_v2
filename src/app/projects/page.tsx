'use client'
import './page.css'
import BackButton from '@/components/atoms/BackButton/BackButton'
import { MoreProjects } from '@/components/pages/MoreProjects/MoreProjects'

const Projects = () => {
  return (
    <main className="projects-view w-h-full px pt-view  animate__animated animate__fadeInLeft">
      <div className='projects-view__content large-gap'>
        <BackButton />
        <MoreProjects />
      </div>
    </main>
  )
}

export default Projects
