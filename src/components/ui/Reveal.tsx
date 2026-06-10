import {
  forwardRef,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'
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
  const offset = reduced ? 0 : y

  const variants: Variants = {
    hidden: { opacity: 0, y: offset },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : duration,
        delay: reduced ? 0 : delay,
        ease: ANIMATION.ease,
      },
    },
  }

  // 通过 motion[as] 动态获取组件
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
})

type StaggerAs = 'div' | 'ul' | 'section'

interface StaggerProps extends Omit<ComponentPropsWithoutRef<'div'>, 'ref'> {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
  once?: boolean
  as?: StaggerAs
}

/**
 * 子元素错位入场容器
 */
export const Stagger = forwardRef<HTMLDivElement, StaggerProps>(function Stagger(
  {
    children,
    className,
    delayChildren = 0.1,
    staggerChildren = 0.08,
    once = true,
    as = 'div',
    ...rest
  },
  ref,
) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduced ? 0 : delayChildren,
        staggerChildren: reduced ? 0 : staggerChildren,
      },
    },
  }
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      {...(rest as object)}
    >
      {children}
    </MotionTag>
  )
})

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ANIMATION.ease },
  },
}
