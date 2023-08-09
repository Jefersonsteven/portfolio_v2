import { BackButton } from '@/components/atoms/BackButton/BackButton'
import { MoreProjects } from '@/components/pages/MoreProjects/MoreProjects'

export default function Projects () {
  return (
    <main className="projects__view w-h-full px pt-view large-gap">
      <BackButton/>
      <MoreProjects/>
    </main>
  )
}
