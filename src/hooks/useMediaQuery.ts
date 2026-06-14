import { useEffect, useState } from 'react'

/**
 * 响应式订阅 —— 匹配 CSS media query 时返回 true。
 *
 * 设计：
 * - SSR 安全（默认 false，hydrate 后再校正）
 * - 防 SSR 抖动：挂载后才订阅，避免首屏渲染时 mql 不存在
 * - 卸载时自动清理 listener
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(query)
    setMatches(mql.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    // Safari < 14 用 addListener；现代浏览器用 addEventListener
    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
      return () => mql.removeEventListener('change', handler)
    } else {
      mql.addListener(handler)
      return () => mql.removeListener(handler)
    }
  }, [query])

  return matches
}
