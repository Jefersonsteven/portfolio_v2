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
    <>
      <Player hidden={open}/>
      <div
      onClick={handleClick}
        className='settings center settings--hover'
      >
        <Icon name="settings" size={30}/>
      </div>
    </>
  )
}
