/**
 * Hero 区视频背景
 * 优先尝试加载视频；若视频文件不存在或加载失败，自动降级为抽象渐变背景
 */
export function HeroVideo() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 抽象渐变背景（兜底） */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(124, 255, 196, 0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(155, 140, 255, 0.15), transparent 55%), linear-gradient(180deg, #0A0A0B 0%, #0d1410 100%)',
        }}
      />

      {/* 视频层（如果 public/hero-bg.mp4 存在则播放） */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        preload="metadata"
        onError={(e) => {
          // 视频加载失败时隐藏，仅保留渐变背景
          ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

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

      {/* 底部主渐变蒙版（让标题在底色上更突出） */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent"
      />

      {/* 左侧薄荷光晕 */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-violet/20 blur-[120px]"
      />

      {/* 噪点纹理 */}
      <div aria-hidden className="absolute inset-0 bg-noise" />
    </div>
  )
}
