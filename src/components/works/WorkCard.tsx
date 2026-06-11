import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { BorderGlow } from '@/components/ui/BorderGlow/BorderGlow'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TechTag } from '@/components/ui/TechTag'
import type { Work } from '@/data/types'

interface WorkCardProps {
  work: Work
  index: number
}

/**
 * 个人作品卡片 —— 与 ProjectCard 刻意区分：
 * - ProjectCard 是 image+text 2 列交错布局，强调"项目履历"感
 * - WorkCard 是 vertical gallery 布局，强调"立刻点开试用"感
 *
 * 关键差异：
 * 1. 无 cover 图时回退到 accent-tinted 渐变（不是 broken <img>）
 * 2. CTA 永远外置、永远 primary（不是悬浮角标）
 * 3. 不显示 role / period（独立作品没有这些字段）
 */
export function WorkCard({ work, index }: WorkCardProps) {
  const reduced = useReducedMotion()
  const accent = work.accentColor
  const coverSrc = work.coverImage
    ? `${import.meta.env.BASE_URL}${work.coverImage}`
    : null

  // 从 URL 提取纯域名当 caption 展示（如 quant-backtest.onrender.com）
  const domain = (() => {
    try {
      return new URL(work.url).host.replace(/^www\./, '')
    } catch {
      return work.url
    }
  })()

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: 0.05 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col"
    >
      <BorderGlow
        // 走品牌三色，光晕固定为薄荷绿（accent 推导）
        colors={['#7CFFC4', '#9B8CFF', '#38bdf8']}
        glowColor="153 100% 75%"
        backgroundColor="#0F1411"
        borderRadius={20}
        glowRadius={28}
        glowIntensity={0.85}
        edgeSensitivity={28}
        coneSpread={22}
        fillOpacity={0.55}
        className="h-full p-1.5 md:p-2"
      >
        <div className="flex h-full flex-col rounded-[14px] bg-bg-surface p-5 md:p-6">
          {/* ───── 封面区 ───── */}
          <div className="relative mb-5 overflow-hidden rounded-xl">
            {coverSrc ? (
              <picture>
                <source
                  type="image/webp"
                  srcSet={`
                    ${coverSrc}-480.webp 480w,
                    ${coverSrc}-768.webp 768w,
                    ${coverSrc}-1280.webp 1280w
                  `}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={`
                    ${coverSrc}-480.jpg 480w,
                    ${coverSrc}-768.jpg 768w,
                    ${coverSrc}-1280.jpg 1280w
                  `}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <img
                  src={`${coverSrc}-768.jpg`}
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
              </picture>
            ) : (
              <div
                aria-hidden
                className="relative aspect-[16/9] w-full"
                style={{
                  background: `linear-gradient(135deg, ${accent}33 0%, #0A0A0B 70%)`,
                }}
              >
                {/* 顶部细高光 */}
                <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                {/* 角落点：accent 色 + glow */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-bg-base/70 px-3 py-1.5 backdrop-blur">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-secondary">
                    {work.status}
                  </span>
                </div>
                {/* 右下水印：work id */}
                <span
                  className="absolute right-4 bottom-3 font-mono text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: `${accent}99` }}
                >
                  {work.id}
                </span>
              </div>
            )}
          </div>

          {/* ───── 内容区 ───── */}
          <div className="flex flex-1 flex-col">
            <div className="mb-3 flex items-center gap-3 text-caption uppercase tracking-[0.16em] text-ink-tertiary">
              <span style={{ color: accent }}>个人作品</span>
              <span className="h-3 w-px bg-line-strong" />
              <span>{work.year}</span>
            </div>

            <h3 className="text-display-sm text-balance text-ink-primary md:text-display-md">
              {work.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-secondary text-pretty md:text-body">
              {work.description}
            </p>

            <ul className="mt-5 space-y-2">
              {work.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm text-ink-primary"
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border bg-accent/[0.08] text-accent"
                    style={{ borderColor: `${accent}55` }}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {work.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>

            {/* ───── CTA：永远 primary，永远底部 —— */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                href={work.url}
                variant="primary"
                anchorProps={{ target: '_blank', rel: 'noopener noreferrer' }}
                ariaLabel={`试用 ${work.title}`}
              >
                <ExternalLink className="h-4 w-4" />
                试用 / Try it
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <span
                className="font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{ color: `${accent}aa` }}
              >
                {domain}
              </span>
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.article>
  )
}
