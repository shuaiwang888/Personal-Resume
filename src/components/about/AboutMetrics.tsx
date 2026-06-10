import { useInView } from 'react-intersection-observer'
import { motion, useReducedMotion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { profile } from '@/data/profile'
import { ANIMATION } from '@/lib/constants'

function MetricItem({
  value,
  prefix,
  suffix,
  label,
  description,
  inView,
  index,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  description?: string
  inView: boolean
  index: number
}) {
  const display = useCountUp(value, { duration: 1.4, startWhen: inView })
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: ANIMATION.ease,
      }}
      className="group relative overflow-hidden rounded-2xl border border-line-subtle bg-bg-surface/40 p-6 transition-all hover:border-accent/30 hover:bg-bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
      <p className="font-display text-4xl font-semibold leading-none text-ink-primary md:text-5xl">
        {prefix}
        <span className="text-gradient-accent">
          {Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}
        </span>
        {suffix && (
          <span className="ml-0.5 text-xl text-ink-secondary md:text-2xl">
            {suffix}
          </span>
        )}
      </p>
      <p className="mt-3 text-sm font-medium text-ink-primary">{label}</p>
      {description && (
        <p className="mt-1 text-xs text-ink-tertiary">{description}</p>
      )}
    </motion.div>
  )
}

export function AboutMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const reduced = useReducedMotion()
  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4"
    >
      {profile.metrics.map((m, i) => (
        <MetricItem
          key={m.label}
          {...m}
          inView={inView || !!reduced}
          index={i}
        />
      ))}
    </div>
  )
}
