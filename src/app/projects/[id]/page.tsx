'use client'
import { ProjectDetail } from '@/components/pages/ProjectDetail/ProjectDetail'
import { useLanguageStore } from '@/store/language'
import { useParams } from 'next/navigation'
import React from 'react'
import './page.scss'
import BackButton from '@/components/atoms/BackButton/BackButton'

const Project = () => {
  const { id } = useParams()
  const { language } = useLanguageStore()
  const project = language.projects.data.filter(project => project.id[1] === id)[0]

  return (
    <main className='project-view w-h-full px pt-view large-gap animate__animated animate__fadeInLeft'>
      <div className='project-view__content large-gap'>
        <BackButton />
        <ProjectDetail project={project} />
      </div>
    </main>
  )
}

export default Project
