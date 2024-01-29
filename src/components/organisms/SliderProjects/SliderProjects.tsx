import Card from '@/components/molecules/Card/Card'
import data from '@/data/translate/en/data.json'
import './index.css'

export const SliderProjects = () => {
  return (
    <main className="slider">
      <section className="slider__projects">
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
              />
            )
          })
        }
      </section>
      <nav className="slider__navigation">
        <button type='button' className="slider__arrow a-left reset-button">
          <img
            className="home__arrow-scroll"
            src="/assets/svgs/arrow-left.svg"
            alt="arrow"
          />
        </button>
        <div className="slider__points">
          {
            data.projects.data.slice(1, 4).map((project, i) => {
              return (
                <button
                  key={crypto.randomUUID()}
                  type='button'
                  className="slider__point reset-button"
                  aria-label={`project-${i + 2}`}
                />
              )
            })
          }
        </div>
        <button type='button' className="slider__arrow a-right reset-button">
          <img
            className="home__arrow-scroll"
            src="/assets/svgs/arrow-right.svg"
            alt="arrow"
          />
        </button>
      </nav>
    </main>
  )
}

export default SliderProjects
