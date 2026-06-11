/**
 * Hero 区背景层
 * - 径向渐变 + 网格 + 上下蒙版，纯 CSS / SVG，零 GPU 消耗
 * - 配色对齐品牌：薄荷绿 #7CFFC4 × 紫罗兰 #9B8CFF
 * - 顶部 + 底部蒙版压暗，让导航文字与正文突出
 *
 * 历史说明：之前用 `<SoftAurora />`（WebGL + Perlin 噪声）做极光波动效果，
 * 1080p 全屏每帧 ~300k 像素 × 3 octave FBM 噪声，中端笔记本上掉帧明显。
 * 已按用户反馈移除 WebGL 极光层，保留静态氛围光。
 */
export function HeroVideo() {
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
