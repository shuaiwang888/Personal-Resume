import { useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '@/data/profile'

/**
 * 头像组件
 * - 响应式：<picture> 自动按视口选最优尺寸 + WebP 优先
 * - 加载失败：降级为 SVG 首字母占位
 * - 旋转环：用 useInView 闸门，滚出视口时停止动画，省电省 GPU
 * - 减少动画偏好：旋转环静止
 * - 源图：public/avatar/avatar.jpg （运行 npm run optimize:images 生成多尺寸）
 */
const SIZES = [256, 384, 512, 768, 1024]
const BASE = import.meta.env.BASE_URL

export function AboutAvatar() {
  const [imgError, setImgError] = useState(false)
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '100px' })

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-sm">
      {/* 渐变旋转环：仅在视口内 + 非 reduced-motion 时才旋转 */}
      <div
        aria-hidden
        className={`absolute inset-0 -m-2 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#7CFFC4_0%,#9B8CFF_25%,#7CFFC4_50%,#9B8CFF_75%,#7CFFC4_100%)] opacity-70 blur-md ${
          reduced ? '' : inView ? 'animate-spin-slow' : ''
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0 -m-px rounded-full bg-bg-base"
      />

      {/* 头像主体 */}
      <div className="relative aspect-square w-full overflow-hidden rounded-full border border-line-subtle bg-bg-elevated">
        {!imgError ? (
          <picture>
            {/* WebP 优先：体积更小、压缩更优 */}
            <source
              type="image/webp"
              srcSet={SIZES.map(
                (w) => `${BASE}avatar/avatar-${w}.webp ${w}w`,
              ).join(', ')}
              sizes="(max-width: 640px) 100vw, 24rem"
            />
            {/* JPG 兜底：覆盖所有老浏览器 */}
            <img
              src={`${BASE}avatar/avatar-512.jpg`}
              srcSet={SIZES.map(
                (w) => `${BASE}avatar/avatar-${w}.jpg ${w}w`,
              ).join(', ')}
              sizes="(max-width: 640px) 100vw, 24rem"
              alt={`${profile.name} 的头像`}
              width={512}
              height={512}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          </picture>
        ) : (
          // 兜底：首字母占位
          <div
            aria-label={`${profile.name} 的头像占位`}
            className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-elevated via-bg-surface to-bg-base"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-grid bg-size-grid opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]"
            />
            <span className="font-display text-[8rem] font-semibold leading-none text-gradient-accent">
              {profile.initial}
            </span>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-caption uppercase text-ink-tertiary">
              <span>AI · PM</span>
              <span className="text-accent">●</span>
            </div>
          </div>
        )}
      </div>

      {/* 浮起的状态卡 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-line-subtle bg-bg-surface/80 px-4 py-2 backdrop-blur"
      >
        <span className="flex items-center gap-2 text-caption uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-ink-secondary">{profile.status}</span>
        </span>
      </motion.div>
    </div>
  )
}
