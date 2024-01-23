/* eslint-disable react/no-unescaped-entities */
import './index.css'

export const About = () => {
  return (
    <section id="about" className="about page">
      <header>
        <h2 className="heading">ABOUT ME</h2>
      </header>
      <main>
        <section className="about__profile">
          <figure>
            <img src="/assets/images/me.png" alt="jefferson steven" />
          </figure>

          <div className="tags">
            <a href="#certificates">Certificates</a>
            <a href="/assets/pdfs/cv-sp.pdf">CV</a>
          </div>
        </section>

        <section className="about__info">
          <article>
            <p>Hi, I'm <strong>Jeffer Steven</strong>, a <strong>Fullstack web developer</strong>
              focused on Frontend and deeply immersed in the world of web application
              design and development.
            </p>

            <p>
              I have successfully completed several projects, both in structured
              courses, bootcamps and during my free time. You can explore some of
              these projects in my portfolio.
            </p>

            <p>
              Currently, I am actively seeking interesting and challenging
              opportunities to further improve my skills as a web developer. My
              experience includes <strong> HTML, CSS, JavaScript, ReactJS, Tailwind, CSS, Sass, Next.js,
                Node.js, and PostgreSQL</strong>.
            </p>

            <p>
              I am eager to contribute my skills to innovative projects and look
              forward to the opportunities ahead.
            </p>
          </article>

          <div className="tags-mobile">
            <a href="/certificates">Certificates</a>
            <a target="_blank" href="/assets/pdfs/cv-sp.pdf">CV</a>
          </div>
        </section>
      </main>
      <figure className="circles">
        <div className="circle-primary"></div>
      </figure>
    </section>
  )
}
