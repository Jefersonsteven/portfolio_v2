import { Settings } from '@/components/atoms/Settings/Settings'
// import { Views } from '@/components/atoms/Views/Views'
import { NavBar } from '@/components/molecules/NavBar/NavBar'
import './Header.scss'
import { Menu } from '@/components/atoms/Menu/Menu'

export const Header = () => {
  return (
    <header className='header px'>
      <Menu/>
      {/* TODO: Create database for views and certificates */}
      {/* <Views/> */}
      <NavBar/>
      <Settings/>
    </header>
  )
}
