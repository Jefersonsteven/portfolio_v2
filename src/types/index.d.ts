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

interface ViewDataAttributes {
  ip: string
  city: string
  region: string
  country: string
  loc: string
  timezone: string
  date: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface ViewData {
  id: number
  attributes: ViewDataAttributes
}
export interface Views {
  data: ViewData
  meta: Meta
}
