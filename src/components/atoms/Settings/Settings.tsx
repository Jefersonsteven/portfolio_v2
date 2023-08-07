'use client'
import React, { useState } from 'react'
import { Icon } from '../Icons/Icon'
import './Settings.scss'

import { Player } from '@/components/molecules/Player/Player'

export const Settings = () => {
  const [open, setOpen] = useState(false)

  function handleClick () {
    setOpen(currentOpen => !currentOpen)
  }

  return (
    <div className='settings'>
      <Player hidden={open}/>
      <div
      onClick={handleClick}
        className='settings__btn center settings__btn--hover pointer'
      >
        <Icon name="settings" size={30}/>
      </div>
    </div>
  )
}
