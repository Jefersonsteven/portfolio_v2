import "./index.css";

interface Props {
  title: string;
  description: string;
  image: string;
  video: string;
  technologies: string[];
  url: string;
}

export default function Card({ title, description, image, video, technologies, url} : Props) {
  return (
    <article className="project">
      <figure className="project__media">
        <video src={video} autoPlay loop muted></video>
        <img src={image} alt={title} />
      </figure>
      <div className="project__info">
        <h3 className="project__title">
          <a href={url}>{ title }</a>
        </h3>
        <p className="project__description">
          { description }
        </p>
        <div className="project__stack">
          {
            technologies.map((technology) => (
              <span className="tag">{ technology }</span>
            ))
          }
        </div>
      </div>
    </article>
  )
}