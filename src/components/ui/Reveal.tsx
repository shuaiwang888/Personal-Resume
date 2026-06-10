import { forwardRef, type ReactNode, useMemo } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ANIMATION } from '@/lib/constants'

type RevealAs = 'div' | 'section' | 'article' | 'header' | 'p' | 'span' | 'li' | 'ul'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
  once?: boolean
  as?: RevealAs
}

/**
 * 滚动入场动画包装
 * - 减少动画偏好下只保留 opacity 切换
 * - 默认 y: 24, duration: 0.7
 * - variants / viewport 通过 useMemo 避免每次 render 重建引用
 */
export const Reveal = forwardRef<HTMLElement, RevealProps>(function Reveal(
  {
    children,
    delay = 0,
    y = 24,
    duration = 0.7,
    className,
    once = true,
    as = 'div',
  },
  ref,
) {
  const reduced = useReducedMotion()

  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduced ? 0 : y },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduced ? 0.01 : duration,
          delay: reduced ? 0 : delay,
          ease: ANIMATION.ease,
        },
      },
    }),
    [reduced, y, duration, delay],
  )

  const viewport = useMemo(
    () => ({ once, margin: '-80px' as const }),
    [once],
  )

  // 通过 motion[as] 动态获取组件
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
})
