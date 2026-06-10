import { Mail, Phone, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { profile, contactChannels } from '@/data/profile'
import { Reveal } from '@/components/ui/Reveal'

const ICONS = { Mail, Phone, MapPin } as const

export function AboutIntro() {
  return (
    <div>
      <Reveal>
        <div className="mb-5 flex items-center gap-3 text-accent">
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-caption uppercase tracking-[0.18em]">
            01 · 关于
          </span>
        </div>
        <h2 className="text-display-md text-balance text-ink-primary md:text-display-lg">
          从后端架构到 <span className="text-gradient-accent">AI 产品落地</span>
          <br />
          把工程深度转化为产品价值
        </h2>
      </Reveal>

      <div className="mt-8 space-y-5 text-body-lg leading-relaxed text-ink-secondary">
        {profile.intro.map((p, i) => (
          <Reveal key={i} delay={i * 0.08} y={12}>
            <p className="text-pretty">{p}</p>
          </Reveal>
        ))}
      </div>

      {/* 联系方式 */}
      <Reveal delay={0.4}>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {contactChannels.map((c) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Mail
            return (
              <li key={c.id}>
                <a
                  href={c.href}
                  className="group flex items-center gap-3 rounded-xl border border-line-subtle bg-bg-surface/50 px-4 py-3 transition-all hover:border-accent/30 hover:bg-bg-surface"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-subtle bg-bg-elevated text-accent transition-colors group-hover:border-accent/50">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">
                      {c.label}
                    </p>
                    <p className="truncate text-sm text-ink-primary">
                      {c.value}
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>

      {/* 工作 & 教育 时间线 */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-caption uppercase tracking-[0.16em] text-ink-tertiary">
              <Briefcase className="h-3.5 w-3.5" />
              工作经历
            </h3>
            <ul className="space-y-6 border-l border-line-subtle pl-5">
              {profile.experiences.map((exp) => (
                <li key={exp.company} className="relative">
                  <span className="absolute -left-[1.625rem] top-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(124,255,196,0.6)]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-base font-medium text-ink-primary">
                    {exp.role}
                  </p>
                  <p className="text-sm text-ink-secondary">{exp.company}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-caption uppercase tracking-[0.16em] text-ink-tertiary">
              <GraduationCap className="h-3.5 w-3.5" />
              教育经历
            </h3>
            <ul className="space-y-6 border-l border-line-subtle pl-5">
              {profile.education.map((edu) => (
                <li key={edu.school} className="relative">
                  <span className="absolute -left-[1.625rem] top-1.5 h-2 w-2 rounded-full bg-accent-violet shadow-[0_0_8px_rgba(155,140,255,0.6)]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">
                    {edu.period}
                  </p>
                  <p className="mt-1 text-base font-medium text-ink-primary">
                    {edu.school}
                    {edu.tag && (
                      <span className="ml-2 inline-flex items-center rounded-full border border-accent/30 bg-accent/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                        {edu.tag}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-ink-secondary">
                    {edu.degree} · {edu.major}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
