import { vendingIcons } from '@/utilities/vendingIcons'
import { useRouter } from 'next/navigation'
import './BackButton.scss'

export const BackButton = () => {
  const navigation = useRouter()

  function handleClick () {
    navigation.back()
  }

  return (
    <button
      aria-label='back'
      onClick={handleClick}
      className='button-back center'
    >
      {vendingIcons('back', 30)}
    </button>
  )
}
