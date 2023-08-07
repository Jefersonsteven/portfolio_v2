'use client'
import { useLanguageStore } from '@/store/language'
import './Technologies.scss'
import { Stacks } from '@/components/molecules/Stacks/Stacks'
export const Technologies = () => {
  const { language } = useLanguageStore()
  return (
    <section id='techsandtools' className='techsandtools px pt large-gap w-h-full'>
      <h2 className='techsandtools__title title'>
        <b>{language.tech_and_tools.title}</b>
      </h2>
      <div className='techsandtools__content'>
        <Stacks/>
      </div>
    </section>
  )
}
