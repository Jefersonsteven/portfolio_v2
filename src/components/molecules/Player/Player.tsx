'use client'
import React, { useEffect, useRef, useState } from 'react'
import './Player.scss'
import { Icon } from '@/components/atoms/Icons/Icon'

interface Props {
  hidden: boolean
}

export const Player: React.FC<Props> = ({ hidden }) => {
  const [play, setPlay] = useState(false)
  const songs = ['music/Marzz-Countless-Times.mp3', 'music/Silence.mp3']
  const [song, setSong] = useState(0)
  const reproductor = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if ((reproductor.current != null) && play) {
      reproductor.current.pause()
      reproductor.current.load()
      reproductor.current.play()
        .catch((err) => { console.log(err) })
    }
  }, [song])

  function handlePlay () {
    if (reproductor.current != null) {
      if (play) {
        reproductor.current.pause()
      } else {
        reproductor.current.play()
          .catch((err) => { console.log(err) })
      }
    }
    setPlay(currentPlay => !currentPlay)
  }

  function handleForward () {
    if (song < songs.length - 1) {
      setSong((currentSong) => currentSong + 1)
    }
  }

  function handleBack () {
    if (song > 0) {
      setSong((currentSong) => currentSong - 1)
    }
  }

  return (
    <div
      className='player'
      style={{ transform: hidden ? 'translateY(-200px)' : 'translateY(0px)' }}
    >
      <audio
        style={{ display: 'none' }}
        ref={reproductor}
        src={songs[song]}
        controls={true}
      />
      <button className='btn btn--hover pointer' onClick={handleBack}>
        <Icon size={20} name='play-back'/>
      </button>
      <button className='btn btn--hover pointer' onClick={handlePlay}>
        <Icon size={20} name={play ? 'pause' : 'play'}/>
      </button>
      <button className='btn btn--hover pointer' onClick={handleForward}>
        <Icon size={20} name='play-forward'/>
      </button>
    </div>
  )
}
