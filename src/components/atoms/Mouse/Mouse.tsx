import React, { useEffect, useRef } from 'react'
import './Mouse.scss'
import { type Coordinates } from '@/types'

export const Mouse: React.FC<Coordinates> = ({ coordinates }) => {
  const mouse = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mouse.current !== null) {
      const x = Math.max(0, Math.min(coordinates.x - 10, window.innerWidth - 25))
      const y = Math.max(0, Math.min(coordinates.y - 10, window.innerHeight - 25))

      mouse.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`
        },
        { duration: 500, fill: 'forwards' }
      )
    }
  }, [coordinates])

  return (
    <div
      ref={mouse}
      className="mouse center"
    >
    </div>
  )
}
