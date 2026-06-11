import { Section } from '@/components/ui/Section'
import { AdvantagesGrid } from './AdvantagesGrid'

export function Advantages() {
  return (
    <Section
      id="advantages"
      eyebrow="04 · 能力优势"
      title={
        <>
          把<span className="text-gradient-accent">工程深度</span>
          转化为
          <span className="text-gradient-accent">产品壁垒</span>
        </>
      }
      description="AI 产品不是 demo 比赛。每一个能力卡片背后，都是在真实业务里被验证过的可复用资产。"
    >
      <AdvantagesGrid />
    </Section>
  )
}
