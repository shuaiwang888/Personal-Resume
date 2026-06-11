// 集中类型定义，便于后续替换文案时类型安全

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
  description?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
  major: string
  period: string
  tag?: string // 例如 985 / 211
}

export interface Profile {
  name: string
  initial: string // 头像占位字符
  title: string
  tagline: string
  location: string
  status: string // e.g. 求职意向
  email: string
  phone: string
  intro: string[]
  metrics: Metric[]
  experiences: Experience[]
  education: Education[]
}

export interface Project {
  id: string
  index: string // 编号 01 / 02 ...
  title: string
  category: string
  role: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  image: string
  accentColor?: string // 卡片强调色
  link?: string
  year: string
}

export interface Advantage {
  id: string
  icon: string // lucide-react 图标名
  title: string
  description: string
}

export interface NavLink {
  id: string
  label: string
  href: string
}

export interface ContactChannel {
  id: string
  label: string
  value: string
  href: string
  icon: string
}

/**
 * 个人作品 —— 与 Project 区分：
 * - Project 是"在岗项目履历"（有 role / period / 雇主）
 * - Work 是"独立/副业作品"（无雇主、可点击试用、状态驱动）
 */
export interface Work {
  id: string
  title: string
  /** 中英双语状态，如 "已上线 / Live"、"开发中 / In Progress" */
  status: string
  /** 卡片强调色：驱动角标 / 渐变封面 / check 图标染色 */
  accentColor: string
  description: string
  highlights: string[]
  tech: string[]
  url: string
  year: string
  /** 可选：未提供时回退到 accent-tinted 渐变占位封面 */
  coverImage?: string
}
