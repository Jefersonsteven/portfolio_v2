import { randomUUID } from 'crypto'
import './index.css'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  image: string
  video: string
  technologies: string[]
  url: string
}

export default function Card ({ title, description, image, video, technologies, url }: Props) {
  return (
    <article className="project">
      <figure className="project__media">
        <video src={video} autoPlay loop muted />
        <img src={image} alt={title} />
      </figure>
      <div className="project__info">
        <h3 className="project__title">
          <Link href={url}>{title}</Link>
        </h3>
        <p className="project__description">
          {description}
        </p>
        <div className="project__stack">
          {
            technologies.map((technology, i) => (
              <span key={randomUUID()} className="tag">{technology}</span>
            ))
          }
        </div>
      </div>
    </article>
  )
}
