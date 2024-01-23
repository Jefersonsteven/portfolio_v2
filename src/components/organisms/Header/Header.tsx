import Navigation from '@/components/molecules/Navigation/Navigation'
import './index.css'

export const Header = () => {
  return (
    <header id="home" className="page header">
      <div className="nav-container">
        <button className="switch-open-menu reset-button">
          <img src="/assets/svgs/menu.svg" alt="menu" />
        </button>

        <div className="menu page">
          <div className="switch-container">
            <button className="switch-close-menu reset-button">
              <img src="/assets/svgs/close.svg" alt="menu" />
            </button>
          </div>

          <Navigation />
        </div>
      </div>

      <div>
        <button
          aria-describedby="configuration"
          title="Configuration"
          className="reset-button"
        >
          <img src="/assets/svgs/settings.svg" alt="configuration" />
        </button>
      </div>
    </header>
  )
}
