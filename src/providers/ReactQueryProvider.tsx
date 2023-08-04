'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()

interface Props {
  children: React.ReactNode
}

export const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
