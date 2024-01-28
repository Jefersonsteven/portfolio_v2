import './index.css'
import SliderProjects from '@/components/organisms/SliderProjects/SliderProjects'

export const Projects = () => {
  return (
    <section id="projects" className="page projects">
      <h2 className="heading">PROJECTS</h2>
      <SliderProjects />
      <figure className="circles">
        <div className="circle-primary" />
      </figure>
    </section>
  )
}
