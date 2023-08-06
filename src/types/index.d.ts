import type en from '@/data/translate/en/data.json'
export interface MenuStore {
  menu: HTMLElement | null
  setMenu: (element: HTMLElement) => void
}

export interface Coordinates {
  coordinates: {
    x: number
    y: number
  }
}

export type language = typeof en

export interface LanguageStore {
  language: language
  setLanguage: (language: es) => void
}
export interface ThemeStore {
  theme: string
  setTheme: (theme: string) => void
}

export interface Ip {
  ip: string
  city: string
  region: string
  country: string
  loc: string
  org?: string
  postal?: string
  timezone: string
}

export interface View extends Ip {
  id: string
}

export type Views = View[]
