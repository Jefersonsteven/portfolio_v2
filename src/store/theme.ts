import { type ThemeStore } from '@/types'
import { create } from 'zustand'

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  setTheme: (theme: string) => { set(() => ({ theme })) }
}))
