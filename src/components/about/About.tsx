import { Section } from '@/components/ui/Section'
import { AboutAvatar } from './AboutAvatar'
import { AboutIntro } from './AboutIntro'
import { AboutMetrics } from './AboutMetrics'
import { useSectionImpression } from '@/hooks/useSectionImpression'

export function About() {
  useSectionImpression('about')
  return (
    <Section id="about" withGrid>
      <div className="grid gap-14 md:gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <AboutAvatar />
        </div>
        <div>
          <AboutIntro />
        </div>
      </div>
      <AboutMetrics />
    </Section>
  )
}
