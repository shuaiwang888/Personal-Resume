import { WorkCard } from './WorkCard'
import { works } from '@/data/works'

/**
 * 响应式网格 —— 1/2/4 列都自然。
 * 2-col 对 1→N 都安全：奇数时第 N 张自然掉到左列(与 1/3 对齐)，右列留白。
 * 无需特殊兜底逻辑 —— 纯 CSS grid 行为。
 */
export function WorksGrid() {
  // 只渲染已填写的槽位；空槽位直接 filter 掉
  const visible = works.filter((w) => w.title)
  if (visible.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {visible.map((w, i) => (
        <WorkCard key={w.id} work={w} index={i} />
      ))}
    </div>
  )
}
