import { useEffect, useState } from 'react'

export interface MousePosition {
  x: number
  y: number
}

/**
 * 跟踪鼠标在视口中的位置
 * 移动端不触发更新（避免无效监听）
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window
    if (isTouch) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pos
}
