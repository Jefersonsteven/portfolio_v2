import { AboutMe } from '@/components/organisms/AboutMe/AboutMe'
import { Header } from '@/components/organisms/Header/Header'
import { Home } from '@/components/organisms/Home/Home'
import { Projects } from '@/components/organisms/Projects/Projects'
import { Technologies } from '@/components/organisms/Technologies/Technologies'

export const SinglePageHome = () => {
  return (
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Technologies/>
      <Projects/>
    </>
  )
}
