'use client'
import { useRouter } from 'next/navigation'

export const ArrowHome = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('#about')
  }
  return (
    <img
      onClick={handleClick}
      className="home__arrow-scroll"
      src="/assets/svgs/arrow.svg"
      alt="arrow"
    />
  )
}
