import { ArrowHome } from '@/components/atoms/ArrowHome/ArrowHome'
import './home.css'

export const Home = () => {
  return (
    <section id='home' className="home page pc">
      <figure>
        <div className="circle-primary" />
        <div className="circle-secondary" />
      </figure>
      <main>
        <h1 className="title animate__animated animate__fadeInLeft">CREATIVE <br /> DEVELOPER</h1>
        <h2 className="home__subtitle animate__animated animate__fadeInRight">
          Merging code and creativity to build impactful visual experiences.
        </h2>
      </main>
      <footer>
        <p className="home__scroll-for-more-container animate__animated animate__fadeInUp">
          <strong className="home__scroll-for-more" />
        </p>
        <ArrowHome />
      </footer>
    </section>
  )
}
