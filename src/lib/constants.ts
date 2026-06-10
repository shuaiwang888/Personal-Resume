import type { Easing } from 'framer-motion'

/**
 * 全局常量配置
 * 修改此处即可影响全站
 */

export const SITE = {
  name: '王帅',
  role: 'AI 产品经理 · 金融大模型',
  url: 'https://example.com', // 部署后修改
  email: '1102733772WS@gmail.com',
  phone: '19372451602',
  builtWith: 'React + Vite + Tailwind CSS + Framer Motion',
} as const

export const ANIMATION = {
  ease: [0.22, 1, 0.36, 1] as Easing,
  duration: {
    fast: 0.4,
    base: 0.6,
    slow: 0.9,
  },
} as const
