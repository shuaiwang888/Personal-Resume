import { useReducedMotion } from 'framer-motion'
import { SoftAurora } from '@/components/ui/SoftAurora/SoftAurora'

/**
 * Hero 区背景层
 * - 径向渐变 + 极光（SoftAurora / WebGL + Perlin 噪声）双层叠加
 * - 配色对齐品牌：薄荷绿 #7CFFC4 × 紫罗兰 #9B8CFF
 * - 顶部 + 底部蒙版压暗，让导航文字与正文突出
 * - 减少动画偏好：不渲染 SoftAurora（节能 + 减轻前庭负担）
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

      {/* 极光（WebGL + Perlin 噪声），仅在未启用 reduced-motion 时渲染 */}
      {!reduced && (
        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <SoftAurora
            speed={0.5}
            scale={1.8}
            brightness={0.9}
            color1="#7CFFC4"
            color2="#9B8CFF"
            noiseFrequency={2.2}
            noiseAmplitude={1.1}
            bandHeight={0.55}
            bandSpread={0.9}
            octaveDecay={0.12}
            layerOffset={0.35}
            colorSpeed={0.6}
            enableMouseInteraction={true}
            mouseInfluence={0.18}
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
