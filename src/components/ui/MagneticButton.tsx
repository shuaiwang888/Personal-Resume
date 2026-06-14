import { useRef, type ReactNode, type MouseEvent, type AnchorHTMLAttributes } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { cn } from '@/lib/cn'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost'
  strength?: number
  ariaLabel?: string
  type?: 'button' | 'submit'
  /** 当 href 存在时透传给 <a>，用于触发浏览器下载（设置文件名等） */
  anchorProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'aria-label'>
}

/**
 * 鼠标磁性 CTA 按钮
 * - primary: 实色薄荷绿 + 深色文字
 * - ghost: 透明背景 + 描边
 */
export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  strength = 0.25,
  ariaLabel,
  type = 'button',
  anchorProps,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 25, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 300, damping: 25, mass: 0.4 })

  // 文本相对反向位移，呈现"层级"感
  const tx = useTransform(sx, (v) => v * 0.4)
  const ty = useTransform(sy, (v) => v * 0.4)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass = cn(
    'group relative inline-flex items-center justify-center gap-2',
    'rounded-full px-7 py-3.5 text-body font-medium',
    'transition-colors duration-300 will-change-transform',
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
    variant === 'primary' &&
      'bg-accent text-bg-base hover:bg-accent-deep shadow-[0_0_40px_rgba(124,255,196,0.25)]',
    variant === 'ghost' &&
      'border border-line-strong text-ink-primary hover:border-accent/50 hover:bg-white/[0.02] hover:text-accent',
    className,
  )

  const inner = (
    <motion.span
      style={{ x: tx, y: ty }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: sx, y: sy }}
        className="inline-block"
      >
        <a
          href={href}
          onClick={onClick}
          className={baseClass}
          aria-label={ariaLabel}
          {...anchorProps}
        >
          {inner}
        </a>
      </motion.div>
    )
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <button
        type={type}
        onClick={onClick}
        className={baseClass}
        aria-label={ariaLabel}
      >
        {inner}
      </button>
    </motion.div>
  )
}
