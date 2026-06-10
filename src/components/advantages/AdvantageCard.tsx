import {
  Brain,
  Rocket,
  Network,
  Zap,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Advantage } from '@/data/types'

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Rocket,
  Network,
  Zap,
  TrendingUp,
}

export function AdvantageCard({ advantage, index }: { advantage: Advantage; index: number }) {
  const reduced = useReducedMotion()
  const Icon = ICON_MAP[advantage.icon] ?? Brain

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.05 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduced ? undefined : { y: -4 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-line-subtle bg-bg-surface/40 p-7 transition-colors hover:border-accent/30 hover:bg-bg-surface"
    >
      {/* 顶部高光线 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />

      {/* 编号 */}
      <span className="absolute right-5 top-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
        0{index + 1}
      </span>

      {/* 图标 */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-line-subtle bg-bg-elevated text-accent transition-all group-hover:border-accent/40 group-hover:shadow-[0_0_24px_rgba(124,255,196,0.18)]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <h3 className="text-display-sm text-ink-primary">{advantage.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary text-pretty">
        {advantage.description}
      </p>
    </motion.div>
  )
}
