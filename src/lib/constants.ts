import type { Easing } from 'framer-motion'

/**
 * 全局常量配置
 * 修改此处即可影响全站
 *
 * 注意：邮箱/手机号等 PII 放在 src/data/profile.ts，从 import.meta.env 读取
 * （本地 .env.local / CI secrets 注入），避免明文出现在公开仓库
 */

export const SITE = {
  name: '王帅',
  role: 'AI 产品经理 · 金融大模型',
  url: 'https://shuaiwang888.github.io/Personal-Resume/',
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
