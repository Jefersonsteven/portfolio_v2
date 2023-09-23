'use client'
import React, { useState } from 'react'
import { Icon } from '../Icons/Icon'
import './Settings.scss'

import { Player } from '@/components/molecules/Player/Player'

export const Settings = () => {
  const [open, setOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  function handleClick () {
    setOpen(currentOpen => !currentOpen)
  }

  return (
    <div className='settings'>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} hidden={open}/>
      <div
      onClick={handleClick}
        className={`settings__btn ${isPlaying ? 'animation--settings' : ''} center settings__btn--hover pointer`}
      >
        <Icon name="settings" size={30}/>
      </div>
    </div>
  )
}
