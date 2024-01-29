'use client'
import { useRouter } from 'next/navigation'

export const ArrowHome = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('#about')
  }

  return (
    <button
      onClick={handleClick}
      className='reset-button'
    >
      <img
        className="home__arrow-scroll"
        src="/assets/svgs/arrow-right.svg"
        alt="arrow"
      />
    </button>
  )
}
