'use client'
import { type language } from '@/types'
import './CardProject.scss'
import React, { useId } from 'react'
import { vendingIcons } from '@/utilities/vendingIcons'

interface Props {
  project: language['projects']['data'][0]
}

export const CardProject: React.FC<Props> = ({ project }) => {
  return (
    <div className='project-card'>
      <video
        playsInline={true}
        loop={true}
        autoPlay={true}
        className='project-card__video'
        src={project.gif}
      ></video>
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
