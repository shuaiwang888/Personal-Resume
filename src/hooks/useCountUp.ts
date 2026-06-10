import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  duration?: number
  start?: number
  startWhen?: boolean
}

/**
 * 数字滚动动画
 * - 仅依赖 [startWhen]：避免 target/duration 变化时重启 RAF 链
 * - 仅在第一次 startWhen 转 true 时启动；之后忽略变化
 * - 自动节流：每 ~2 帧（约 30fps）才触发一次 setState，
 *   视觉上无法分辨，但减少 50% 的 React reconciliation
 */
export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { duration = 1.6, start = 0, startWhen = true } = options
  const [value, setValue] = useState(start)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!startWhen || startedRef.current) return
    // 起点 = 终值时无需动画
    if (start === target) {
      startedRef.current = true
      setValue(target)
      return
    }
    startedRef.current = true

    const startTime = performance.now()
    let raf = 0
    let frameCount = 0
    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      const current = start + (target - start) * eased
      // 节流：每 2 帧（约 30fps）写一次，视觉无差异
      if (frameCount % 2 === 0 || t >= 1) {
        setValue(t >= 1 ? target : current)
      }
      frameCount++
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [startWhen, start, target, duration])

  return value
}
