'use client'
import { vendingIcons } from '@/utilities/vendingIcons'
import React from 'react'

interface Props {
  name: string
  size: number
}

export const Icon: React.FC<Props> = ({ name, size }) => {
  return <span>{vendingIcons(name, size)} </span>
}
