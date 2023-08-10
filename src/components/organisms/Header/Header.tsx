import { Settings } from '@/components/atoms/Settings/Settings'
import { Views } from '@/components/atoms/Views/Views'
import { NavBar } from '@/components/molecules/NavBar/NavBar'
import './Header.scss'
import { Menu } from '@/components/atoms/Menu/Menu'

export const Header = () => {
  return (
    <header className='header animate__animated animate__bounceInDown'>
      <Menu/>
      <Views/>
      <NavBar/>
      <Settings/>
    </header>
  )
}
