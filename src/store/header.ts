import { type MenuStore } from '@/types'
import { create } from 'zustand'

export const useMenuStore = create<MenuStore>((set) => ({
  menu: null,
  setMenu: (element: HTMLElement) => { set((state) => ({ menu: element })) }
}))
