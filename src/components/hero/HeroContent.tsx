import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { profile } from '@/data/profile'
import { ANIMATION } from '@/lib/constants'

const HEADLINE = '用 AI 重塑金融决策'

export function HeroContent() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay: reduced ? 0 : delay,
      ease: ANIMATION.ease,
    },
  })

  return (
    <div className="relative z-10 mx-auto flex h-full max-w-content flex-col justify-center px-6 md:px-10">
      <div className="max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0)}
          className="mb-6 flex items-center gap-3 text-accent md:mb-8"
        >
          <span className="h-px w-10 bg-accent/60 md:w-14" />
          <span className="font-mono text-caption uppercase tracking-[0.2em]">
            {profile.title}
          </span>
        </motion.div>

        {/* 主标题：整体淡入（避免逐字动画拖慢 LCP），保留光标闪烁 */}
        <h1 className="font-display text-display-xl text-balance text-ink-primary">
          {HEADLINE}
          <motion.span
            initial={reduced ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 0.6, duration: 0.6 }}
            className="ml-1 inline-block h-[0.85em] w-[0.4em] translate-y-[0.05em] bg-accent"
            aria-hidden
          />
        </h1>

        {/* 副标题 */}
        <motion.p
          {...fadeUp(0.4)}
          className="mt-6 max-w-2xl text-body-lg text-ink-secondary md:mt-8 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        {/* 核心亮点 */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-tertiary md:mt-10"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            主导 4 款 AI 产品从 0 到 1
          </span>
          <span className="hidden h-3 w-px bg-line-strong md:inline-block" />
          <span>军工 / 政企 / 航运 多场景商业化</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-12"
        >
          <MagneticButton href="#projects" variant="primary">
            查看项目
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            联系我
          </MagneticButton>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-caption uppercase text-ink-tertiary md:flex"
        aria-label="向下滚动"
      >
        <span>scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex h-9 w-5 items-start justify-center rounded-full border border-line-strong pt-1.5"
        >
          <ArrowDown className="h-3 w-3" />
        </motion.span>
      </motion.a>
    </div>
  )
}
