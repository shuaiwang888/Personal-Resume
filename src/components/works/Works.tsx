import { Section } from '@/components/ui/Section'
import { WorksGrid } from './WorksGrid'
import { useSectionImpression } from '@/hooks/useSectionImpression'

export function Works() {
  useSectionImpression('works')
  return (
    <Section
      id="works"
      eyebrow="03 · 个人作品"
      title={
        <>
          独立开发的 <span className="text-gradient-accent">可交互 Demo</span>
        </>
      }
      description="工作之外用 Python + 前端做的几个小项目 —— 每一个都跑得起来，点开就能试。"
    >
      <WorksGrid />
    </Section>
  )
}
