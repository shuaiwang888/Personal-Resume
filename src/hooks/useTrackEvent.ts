import { useEffect, useRef } from 'react'
import { trackEvent, type TrackedEvent } from '@/lib/api'

/**
 * 在挂载 / 卸载 / deps 变化时触发埋点。
 * - 默认 mountOnly=true,只触发一次
 * - 把事件对象传进 deps 数组可实现"值变化时触发"
 *
 * SSR 安全：服务端渲染时 import.meta.env 存在但 fetch 不存在,
 * trackEvent 内部已 try/catch 静默。
 */
export function useTrackEvent(
  event: TrackedEvent | (() => TrackedEvent),
  opts: { mountOnly?: boolean; enabled?: boolean } = {},
): void {
  const { mountOnly = true, enabled = true } = opts
  const firedRef = useRef(false)

  useEffect(() => {
    if (!enabled) return
    if (mountOnly && firedRef.current) return
    const e = typeof event === 'function' ? event() : event
    trackEvent(e)
    firedRef.current = true
  }, [enabled]) // mountOnly 时 deps 只有 enabled,卸载不会重跑
}
