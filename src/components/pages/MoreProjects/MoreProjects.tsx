'use client'
import { useLanguageStore } from '@/store/language'
import './MoreProjects.scss'
// import { MiniCardProject } from '@/components/molecules/MiniCardProject/MiniCardProject'

export const MoreProjects = () => {
  const { language } = useLanguageStore()
  return (
    <div className='more-projects large-gap'>
      <h1 className='more-projects__title title'>
        <b>{language.more_projects.title}</b>
      </h1>
      {/* <div className='more-projects__content large-gap'>
        {language.more_projects.data.map(project => (
          <MiniCardProject key={project.id} project={project}/>
        )).reverse()}
      </div> */}
    </div>
  )
}
