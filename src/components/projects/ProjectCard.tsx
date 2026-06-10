import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { TechTag } from '@/components/ui/TechTag'
import type { Project } from '@/data/types'
import { cn } from '@/lib/cn'

interface ProjectCardProps {
  project: Project
  reverse?: boolean
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const reduced = useReducedMotion()
  const accent = project.accentColor ?? '#7CFFC4'
  const imageSrc = `${import.meta.env.BASE_URL}${project.image}`

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={cn(
          'grid gap-8 md:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center',
          reverse && 'lg:[&>div:first-child]:order-2',
        )}
      >
        {/* 图片区 */}
        <div className="relative overflow-hidden rounded-2xl border border-line-subtle bg-bg-surface">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <motion.div
            className="aspect-[16/10] w-full"
            whileHover={reduced ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={imageSrc}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => {
                // 占位图加载失败时用 CSS 渐变兜底
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
                const parent = t.parentElement
                if (parent) {
                  parent.style.background = `linear-gradient(135deg, ${accent}22 0%, #0A0A0B 100%)`
                }
              }}
            />
          </motion.div>

          {/* 角标 */}
          <div
            className={cn(
              'absolute left-5 top-5 z-10 flex items-center gap-2',
              'rounded-full border border-white/10 bg-bg-base/70 px-3 py-1.5 backdrop-blur',
            )}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-secondary">
              {project.index} / {project.year}
            </span>
          </div>

          {/* 悬浮 CTA */}
          <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg-base/70 text-ink-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:border-accent/50 group-hover:text-accent">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* 内容区 */}
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-caption uppercase tracking-[0.16em] text-ink-tertiary">
            <span className="text-accent">{project.category}</span>
            <span className="h-3 w-px bg-line-strong" />
            <span>{project.period}</span>
          </div>

          <h3 className="text-display-md text-balance text-ink-primary">
            {project.title}
          </h3>

          <p className="mt-5 text-body text-ink-secondary text-pretty">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink-primary">
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.08] text-accent"
                >
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="text-pretty">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-tertiary">
            角色 · {project.role}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
