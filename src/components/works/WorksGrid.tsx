import { WorkCard } from './WorkCard'
import { works } from '@/data/works'

/**
 * 响应式网格 —— 1/2/4 都自然。
 * 2-col 是 1→4 最安全的布局。
 *
 * 孤儿兜底：作品数是奇数（比如 5 = 2×2 + 1）时，最后一张走
 *   `md:col-span-2` 跨满整行 + 内部 `max-w-2xl mx-auto` 居中并约束宽度，
 * 避免它孤零零贴左，也避免它被强行拉成两列宽。
 */
export function WorksGrid() {
  // 只渲染已填写的槽位；空槽位直接 filter 掉
  const visible = works.filter((w) => w.title)
  if (visible.length === 0) return null

  // 拆分：完整 2×2 的 N 对 + 最多 1 张孤儿
  const pairedCount = Math.floor(visible.length / 2) * 2
  const paired = visible.slice(0, pairedCount)
  // 奇数时，孤儿 = 数组最后一张；偶数时为 []
  const orphan = visible.length % 2 === 1 ? visible[visible.length - 1] : null

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {paired.map((w, i) => (
        <WorkCard key={w.id} work={w} index={i} />
      ))}

      {orphan && (
        <div className="md:col-span-2 flex justify-center">
          {/* md+ 限宽，孤儿卡不会占满整行；移动端继续 1 列满宽 */}
          <div className="w-full max-w-2xl">
            <WorkCard
              key={orphan.id}
              work={orphan}
              index={pairedCount}
            />
          </div>
        </div>
      )}
    </div>
  )
}
