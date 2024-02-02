import { type language } from '@/types'
import './ProjectDetail.scss'
import React, { useId } from 'react'
import { vendingIcons } from '@/utilities/vendingIcons'
import Link from 'next/link'

interface Props {
  project: language['projects']['data'][0]
}

export const ProjectDetail: React.FC<Props> = ({ project }) => {
  return (
    <article className='project page'>
      <div className='project__preview'>
        <div className='project__title'>
          <h2 className='heading'>
            <strong>{project.title}</strong>
          </h2>
          {project.team &&
            <span className='tag'>
              {project.description.title === 'Resumen'
                ? 'Trabajo en equipo'
                : 'Team Work'
              }
            </span>
          }
        </div>

        <div className='project__video'>
          <video autoPlay loop src={project.gif} />
          <img src={project.image} alt={project.title} />
        </div>

        <div className='project__technologies small-gap'>
          <h3 className='subtitle'>
            <b>
              {project.description.title === 'Resumen' ? 'Tecnologias' : 'Tech Stack'}
            </b>
          </h3>
          <div className='project__stack'>
            {project.tech_stack.map(tech => {
              const techId = useId()
              return (
                <span key={techId} className='tag'>
                  <p>{tech}</p>
                  {vendingIcons(tech, 20)}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      <div className='project__description'>
        <b>{project.description.title}: </b>
        <p className='project__summary'>
          {project.description.content}
        </p>

        <p><b>ROL : </b> {project.rol}</p>

        <div className='project__list-tasks small-gap'>
          <h3 className='project__tasks-title'>
            <b>{project.tasks.title}</b>
          </h3>
          <div className='project__tasks small-gap'>
            {project.tasks.data.map(task => (
              <p
                key={task.id}
              >
                <code>
                  <strong>{task.title}: </strong>
                </code>
                {task.content}
              </p>
            ))}
          </div>
        </div>

        <div className='project__links small-gap'>
          {project.github !== '' &&
            <div className='project__link'>
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
          }
          {project.web !== '' &&
            <div className='project__link'>
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
          }
        </div>
      </div>
    </article>
  )
}
