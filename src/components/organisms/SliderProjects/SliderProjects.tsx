import Card from '@/components/molecules/Card/Card'
import data from '@/data/translate/en/data.json'
import './index.css'

export default function SliderProjects () {
  return (
    <main className="slider">
      <section className="slider__projects">
          {
             data.projects.data.slice(1, 4).map(project => {
               return (
                   <Card
                       key={crypto.randomUUID()}
                       title={project.title}
                       description={project.description.content}
                       image={project.image}
                       video={project.gif}
                       technologies={project.tech_stack}
                       url="/projects/1"
                   />
               )
             })
          }
      </section>
      <nav className="slider__navigation">
          <button className="slider__arrow a-left"></button>
          <div>
              <button className="slider__point" aria-label="project-1"></button>
              <button className="slider__point" aria-label="project-2"></button>
              <button className="slider__point" aria-label="project-3"></button>
              <button className="slider__point" aria-label="project-4"></button>
          </div>
          <button className="slider__arrow a-right"></button>
      </nav>
    </main>
  )
}
