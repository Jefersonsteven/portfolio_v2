import './index.css'

interface Props {
  title: string
  description: string
  image: string
  video: string
  technologies: string[]
  url: string
  index: number
  current: number
}

const Card = ({ title, description, image, video, technologies, url, index, current }: Props) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const expression = `project ${index !== current && 'project-hidden'}`
  return (
    <article className={expression}>
      <figure className="project__media">
        <video src={video} autoPlay loop muted />
        <img src={image} alt={title} />
      </figure>
      <div className="project__info">
        <h3 className="project__title">
          <a href={url}>{title}</a>
        </h3>
        <p className="project__description">
          {description}
        </p>
        <div className="project__stack">
          {
            technologies.map((technology, i) => (
              <span key={crypto.randomUUID()} className="tag">{technology}</span>
            ))
          }
        </div>
      </div>
    </article>
  )
}

export default Card
