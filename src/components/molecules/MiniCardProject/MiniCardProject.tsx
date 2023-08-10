'use client'
import { type language } from '@/types'
import './MiniCardProject.scss'
import React, { useId } from 'react'
import Link from 'next/link'
import { vendingIcons } from '@/utilities/vendingIcons'
import Image from 'next/image'

interface Props {
  project: language['more_projects']['data'][0]
}

export const MiniCardProject: React.FC<Props> = ({ project }) => {
  return (
    <div className='mini-project'>
      <Image
        className='mini-project__video'
        width={305}
        height={212}
        src={project.gif}
        alt={project.title}
        priority
      />
      <h3 className='mini-project__title'><b>{project.title}</b></h3>
      <div className='mini-project__info'>
        <div className='mini-project__links small-gap'>
          <div className='mini-project__link'>
            <Link
               aria-label={`Go to Github of ${project.title}`}
               prefetch={false}
               target='__blank'
               href={project.github}
               as={undefined}
               >
                Github
              </Link>
            {vendingIcons('link', 20)}
          </div>
          <div className='mini-project__link'>
            <Link
              aria-label={`Go to Web of ${project.title}`}
              prefetch={false}
              target='__blank'
              href={project.web}
              as={undefined}
              >
                Web
            </Link>
            {vendingIcons('link', 20)}
          </div>
        </div>

        <div className='mini-project__technologies'>
          {project.tech_stack.map(tech => {
            const techId = useId()
            return (
              <span key={techId}>
                {vendingIcons(tech, 20)}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
