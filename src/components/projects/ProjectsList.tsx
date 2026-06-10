import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsList() {
  return (
    <div className="space-y-24 md:space-y-32">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
      ))}
    </div>
  )
}
