import { useInView } from 'react-intersection-observer'
import { motion, useReducedMotion } from 'framer-motion'
import { BorderGlow } from '@/components/ui/BorderGlow/BorderGlow'
import { useCountUp } from '@/hooks/useCountUp'
import { profile } from '@/data/profile'
import { ANIMATION } from '@/lib/constants'

/**
 * 单个指标卡片 —— 顶层声明（不要嵌套在 AboutMetrics 内，
 * 否则父级每次 render 都会重建组件身份，导致 useCountUp / useInView 重置）
 */
function MetricItem({
  value,
  prefix,
  suffix,
  label,
  description,
  startWhen,
  index,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  description?: string
  startWhen: boolean
  index: number
}) {
  // 终值（reduced 模式直接展示，跳过滚动动画）
  const reduced = useReducedMotion()
  const display = useCountUp(value, {
    duration: 1.4,
    startWhen: startWhen && !reduced,
  })
  const show = reduced ? value : display
  const formatted = Number.isInteger(value) ? Math.round(show) : show.toFixed(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={startWhen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: ANIMATION.ease,
      }}
    >
      <BorderGlow
        // 4 个小卡：用更收敛的参数，不抢数字的视觉焦点
        colors={['#7CFFC4', '#9B8CFF', '#38bdf8']}
        glowColor="153 100% 75%"
        backgroundColor="#0F1411"
        borderRadius={16}
        glowRadius={20}
        glowIntensity={0.6}
        edgeSensitivity={22}
        coneSpread={18}
        fillOpacity={0.45}
        className="p-1"
      >
        <div className="group relative overflow-hidden rounded-[12px] bg-bg-surface/40 p-5 transition-all hover:bg-bg-surface md:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />
          <p className="font-display text-4xl font-semibold leading-none text-ink-primary md:text-5xl">
            {prefix}
            <span className="text-gradient-accent">{formatted}</span>
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
        </div>
      </BorderGlow>
    </motion.div>
  )
}

export function AboutMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4"
    >
      {profile.metrics.map((m, i) => (
        <MetricItem key={m.label} {...m} startWhen={inView} index={i} />
      ))}
    </div>
  )
}
