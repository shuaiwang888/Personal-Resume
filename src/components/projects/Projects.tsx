import { Section } from '@/components/ui/Section'
import { ProjectsList } from './ProjectsList'
import { useSectionImpression } from '@/hooks/useSectionImpression'

export function Projects() {
  useSectionImpression('projects')
  return (
    <Section
      id="projects"
      eyebrow="02 · 精选项目"
      title={
        <>
          从 <span className="text-gradient-accent">军工、政企到航运</span>
          <br />
          AI 产品的真实落地
        </>
      }
      description="主导 4 款 AI 产品在严苛场景下完成从 0 到 1，覆盖 AIGC+BI、多智能体协同、RAG 智能问答、轨迹预测等核心方向。"
    >
      <ProjectsList />
    </Section>
  )
}
