import { useReducedMotion } from 'framer-motion'
import { SideRays } from '@/components/ui/SideRays/SideRays'

/**
 * Hero 区背景层
 * - 径向渐变 + 边角射线（SideRays / WebGL）双层叠加
 * - 配色对齐品牌：薄荷绿 #7CFFC4 × 紫罗兰 #9B8CFF
 * - 顶部 + 底部蒙版压暗，让导航文字与正文突出
 * - 减少动画偏好：不渲染 SideRays（节能 + 减轻前庭负担）
 */
export function HeroVideo() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 主背景：径向渐变（冷暖光感） */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(124, 255, 196, 0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(155, 140, 255, 0.15), transparent 55%), linear-gradient(180deg, #0A0A0B 0%, #0d1410 100%)',
        }}
      />

      {/* 边角射线（WebGL），仅在未启用 reduced-motion 时渲染 */}
      {!reduced && (
        <div className="absolute inset-0 opacity-60">
          <SideRays
            speed={1.2}
            rayColor1="#7CFFC4"
            rayColor2="#9B8CFF"
            intensity={1.2}
            spread={1.5}
            origin="top-right"
            tilt={0}
            saturation={1.3}
            blend={0.5}
            falloff={1.8}
            opacity={1.0}
          />
        </div>
      )}

      {/* 网格线 */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid bg-size-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      {/* 顶部渐变压暗，让导航文字可读 */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-base/90 to-transparent"
      />

      {/* 底部主渐变蒙版 */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent"
      />
    </div>
  )
}
