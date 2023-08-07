import { useLanguageStore } from '@/store/language'
import './Stacks.scss'
import { IconTag } from '../IconTag/IconTag'
export const Stacks = () => {
  const { language } = useLanguageStore()
  return (
    <div className='stacks'>
      {language.tech_and_tools.stack.map(tech => (
        <IconTag key={tech} name={tech}/>
      ))}
    </div>
  )
}
