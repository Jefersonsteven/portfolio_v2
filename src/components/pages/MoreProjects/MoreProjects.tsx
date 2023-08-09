'use client'
import { useLanguageStore } from '@/store/language'
import './MoreProjects.scss'

export const MoreProjects = () => {
  const { language } = useLanguageStore()
  return (
    <div>
      <h1>{language.more_projects.title}</h1>
      <div></div>
    </div>
  )
}
