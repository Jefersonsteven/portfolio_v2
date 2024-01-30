'use client'
import Card from '@/components/molecules/Card/Card'
import data from '@/data/translate/en/data.json'
import './index.css'
import { useEffect, useRef, useState } from 'react'

export const SliderProjects = () => {
  const [current, setCurrent] = useState(0)
  const slider = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (current >= 2) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current <= 0) {
      setCurrent(2)
    } else {
      setCurrent(current - 1)
    }
  }

  const handleDotClick = (index: number) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (slider.current != null) {
      slider.current.style.transform = `translateX(-${current * 25}%)`
    }
  }, [current])

  return (
    <main className="slider">
      <section ref={slider} className="slider__projects">
        {
          data.projects.data.slice(1, 4).map((project, index) => {
            return (
              <Card
                key={crypto.randomUUID()}
                title={project.title}
                description={project.description.content}
                image={project.image}
                video={project.gif}
                technologies={project.tech_stack}
                url={`/projects/${project.id[1]}`}
                index={index}
                current={current}
              />
            )
          })
        }
      </section>

      <nav className="slider__navigation">
        <div className='slider__arrow-container'>
          {
            current !== 0 && <button onClick={prevSlide} type='button' className="slider__arrow a-left reset-button">
              <img
                className="home__arrow-scroll"
                src="/assets/svgs/arrow-left.svg"
                alt="arrow"
              />
            </button>
          }
        </div>
        <div className="slider__points">
          {
            data.projects.data.slice(1, 4).map((project, i) => {
              return (
                <button
                  key={crypto.randomUUID()}
                  type='button'
                  className="slider__point reset-button"
                  aria-label={`project-${i + 2}`}
                  onClick={() => { handleDotClick(i) }}
                />
              )
            })
          }
        </div>
        <div className='slider__arrow-container'>
          {current !== 2 && <button onClick={nextSlide} type='button' className="slider__arrow a-right reset-button">
            <img
              className="home__arrow-scroll"
              src="/assets/svgs/arrow-right.svg"
              alt="arrow"
            />
          </button>}
        </div>
      </nav>
    </main>
  )
}

export default SliderProjects
