import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export function AboutAvatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* 渐变旋转环 */}
      <div
        aria-hidden
        className="absolute inset-0 -m-2 animate-spin-slow rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#7CFFC4_0%,#9B8CFF_25%,#7CFFC4_50%,#9B8CFF_75%,#7CFFC4_100%)] opacity-70 blur-md"
      />
      <div
        aria-hidden
        className="absolute inset-0 -m-px rounded-full bg-bg-base"
      />

      {/* 头像主体 */}
      <div className="relative aspect-square w-full overflow-hidden rounded-full border border-line-subtle bg-bg-elevated">
        {/* 占位：使用首字母，未来可替换为真实头像 */}
        <div
          aria-label={`${profile.name} 的头像占位`}
          className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-elevated via-bg-surface to-bg-base"
        >
          {/* 装饰网格 */}
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
