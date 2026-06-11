import { WorkCard } from './WorkCard'
import { works } from '@/data/works'

/**
 * 响应式网格 —— 1/2/4 都自然，3 个会留一个孤儿（2×2 + 1）
 * 2-col 是对 1→4 都最安全的布局
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
