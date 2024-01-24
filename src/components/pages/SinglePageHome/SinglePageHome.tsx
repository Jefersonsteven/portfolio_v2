import { About } from '@/components/organisms/About/About'
import { Contact } from '@/components/organisms/Contact/Contact'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'
import { Home } from '@/components/organisms/Home/Home'
import { Projects } from '@/components/organisms/Projects/Projects'

export const SinglePageHome = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
