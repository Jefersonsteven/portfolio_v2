export interface MenuStore {
  menu: HTMLElement | null
  setMenu: (element: HTMLElement) => void
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
