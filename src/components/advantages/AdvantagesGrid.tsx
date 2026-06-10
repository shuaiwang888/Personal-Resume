import { advantages } from '@/data/advantages'
import { AdvantageCard } from './AdvantageCard'

export function AdvantagesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {advantages.map((a, i) => (
        <AdvantageCard key={a.id} advantage={a} index={i} />
      ))}
    </div>
  )
}
