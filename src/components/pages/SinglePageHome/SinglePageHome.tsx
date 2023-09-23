import { NavBar } from '@/components/molecules/NavBar/NavBar'
import { AboutMe } from '@/components/organisms/AboutMe/AboutMe'
import { Contact } from '@/components/organisms/Contact/Contact'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'
import { Home } from '@/components/organisms/Home/Home'
import { Projects } from '@/components/organisms/Projects/Projects'
import { Technologies } from '@/components/organisms/Technologies/Technologies'

export const SinglePageHome = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <Home/>
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
