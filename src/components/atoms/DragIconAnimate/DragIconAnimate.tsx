import './DragIconAnimate.scss'
import lottie from 'lottie-web'
import dragIconAnimation from '@/data/dragIconAnimate.json'
import { useEffect } from 'react'

export const DragIconAnimate = () => {
  useEffect(() => {
    const container = document.querySelector('.drag-icon-animate')
    if (container != null) {
      lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: dragIconAnimation
      })
    }
  }, [])
  return (
    <div className="drag-icon-animate">

    </div>
  )
}
