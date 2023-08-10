'use client'
import { type language } from '@/types'
import './CardProject.scss'
import React, { useId } from 'react'
import { vendingIcons } from '@/utilities/vendingIcons'
import { useRouter } from 'next/navigation'

interface Props {
  project: language['projects']['data'][0]
}

export const CardProject: React.FC<Props> = ({ project }) => {
  const navigation = useRouter()

  function handleClick () {
    navigation.push(`/projects/${project.id}`)
  }

  return (
    <div onClick={handleClick} className='project-card project-card--hover pointer'>
      <div className='project-card__video'>
      <video
        autoPlay
        loop
        src={project.gif}
      ></video>
      <img className='project-card__image' src={project.image} alt={project.title} />
      </div>
      <div className='project-card__content project-card__content--hover'>
        <h3 className='project-card__title'>{project.title}</h3>
        <div className='project-card__technologies'>
          {project.tech_stack.map(tech => {
            const iconId = useId()
            return (
              <div key={iconId} className='project-card__icon'>
                {vendingIcons(tech, 20)}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
