import './index.css'
import { Socials } from '@/components/molecules/Socials/Socials'

export const Footer = () => {
  return (
    <footer className="page">
      <a title="home" href="/" className="home-action">
        <div className="logo-container">
          <div className="logo-animate"></div>
        </div>
        <img src="/assets/svgs/logo-dynamic.png" alt="Logo" className="logo" />
      </a>

      <p className="copy">
        <span>
          Designed in Figma and coded in Visual Studio Code by yours truly
        </span>
        <strong>
          <a target="_blank" href="https://github.com/Jefersonsteven" rel="noreferrer">
            @Jeffersonsteven.
          </a>
        </strong>
        <span>
          Built with Astro, Reactjs, Prisma and CSS, implemented with Vercel. All
          text is set in League Spartan and Montserrat font.
        </span>
      </p>

      <Socials />
    </footer>
  )
}
