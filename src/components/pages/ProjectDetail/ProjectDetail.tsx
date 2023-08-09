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
    <article className='project large-gap'>
      <div className='project__preview small-gap'>
        <div className='project__title small-gap'>
        <h2 className='title'>
          <b>{project.title}</b>
        </h2>
        {project.team &&
          <span className='project__tag'>
            {project.description.title === 'Resumen'
              ? 'Trabajo en equipo'
              : 'Team Work'
            }
          </span>
        }
        </div>

        <video
          autoPlay
          loop
          className='project__video'
          src={project.gif}
        ></video>

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
              <span key={techId} className='project__tag'>
                <p>{tech}</p>
                {vendingIcons(tech, 20)}
              </span>
              )
            })}
          </div>
        </div>
      </div>

      <div className='project__description small-gap'>
        <p className='project__summary'>
          <b>{project.description.title}: </b>
           {project.description.content}
        </p>

        <p><b>ROL:</b> {project.rol}</p>

        <div className='project__list-tasks small-gap'>
          <h3 className='project__tasks-title'>
            <b>{project.tasks.title}</b>
          </h3>
          <div className='project__tasks small-gap'>
            {project.tasks.data.map(task => (
              <p
              key={task.id}
              >
                <strong>{task.title}: </strong>
                {task.content}
              </p>
            ))}
          </div>
        </div>

        <div className='project__links small-gap'>
          <div className='project__link'>
            <Link
               aria-label={`Go to Github of ${project.title}`}
               prefetch={false}
               target='__blank'
               href={project.github}
               >
                <b>Github</b>
              </Link>
            {vendingIcons('link', 20)}
          </div>
          <div className='project__link'>
            <Link
              aria-label={`Go to Web of ${project.title}`}
              prefetch={false}
              target='__blank'
              href={project.web}
              >
                <b>Web</b>
            </Link>
            {vendingIcons('link', 20)}
          </div>
        </div>
      </div>
    </article>
  )
}
