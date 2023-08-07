import { Icon } from '@/components/atoms/Icons/Icon'
import './IconTag.scss'
import React from 'react'

interface Props {
  name: string
}

export const IconTag: React.FC<Props> = ({ name }) => {
  return (
    <div className='tag'>
      <p className='tag__title'>{name}</p>
      <Icon name={name} size={20}/>
    </div>
  )
}
