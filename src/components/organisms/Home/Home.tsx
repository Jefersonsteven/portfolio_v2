import './home.css'

export const Home = () => {
  return (
    <section className="home page">
      <figure>
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
      </figure>
      <main>
        <h1 className="title">CREATIVE DEVELOPER</h1>
        <h2 className="home__subtitle">
          Merging code and creativity to build impactful visual experiences.
        </h2>
      </main>
      <footer>
        <p>
          <strong className="home__scroll-for-more"></strong>
        </p>
        <img
          className="home__arrow-scroll"
          src="/assets/svgs/arrow.svg"
          alt="arrow"
        />
      </footer>
    </section>
  )
}
