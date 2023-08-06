'use client'
import { useMenuStore } from '@/store/header'
import { Icon } from '../Icons/Icon'
import './Menu.scss'
import { toggleMenu } from '@/utilities/toggleMenu'

export const Menu = () => {
  const { menu } = useMenuStore()

  function handleClick () {
    if (menu !== null) {
      toggleMenu(menu)
    }
  }

  return (
    <div className='menu pointer' onClick={handleClick}>
      <Icon name='menu' size={30}/>
    </div>
  )
}
