import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  duration?: number
  start?: number
  startWhen?: boolean
}

/**
 * 数字滚动动画
 * startWhen 变为 true 时启动到 target 的过渡
 */
export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { duration = 1.6, start = 0, startWhen = true } = options
  const [value, setValue] = useState(start)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!startWhen || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const t = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = start + (target - start) * eased
      setValue(current)
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, duration, start, startWhen])

  return value
}
