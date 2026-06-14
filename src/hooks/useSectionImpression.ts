import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/api'

/**
 * 进入视区 50% 时触发 section_impression,同一会话同一 section 只触发一次。
 *
 * 实现:
 * - IntersectionObserver(threshold: 0.5, margin: 0)
 * - 用 useRef Set<sessionId, sectionId> 内存去重（不放 sessionStorage,
 *   避免 GDPR cookie 横幅;同 SPA 内导航也不重复计）
 * - 后端在聚合层会把 hero 的 section_impression 合并到 app_loaded
 */
export function useSectionImpression(sectionId: string, enabled: boolean = true): void {
  const seenRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }
    if (seenRef.current.has(sectionId)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (seenRef.current.has(sectionId)) return
            seenRef.current.add(sectionId)
            trackEvent({ type: 'section_impression', section: sectionId })
            observer.disconnect()
            break
          }
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: '0px' },
    )

    // 观察 document.body,过滤出 id 匹配的 section
    const target = document.getElementById(sectionId)
    if (target) {
      observer.observe(target)
    }

    return () => observer.disconnect()
  }, [sectionId, enabled])
}
