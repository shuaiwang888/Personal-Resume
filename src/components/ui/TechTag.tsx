import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TechTagProps {
  children: ReactNode
  className?: string
  tone?: 'default' | 'accent'
}

export function TechTag({ children, className, tone = 'default' }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
        'font-mono text-[11px] uppercase tracking-[0.14em]',
        'transition-colors duration-300',
        tone === 'accent'
          ? 'border-accent/30 bg-accent/[0.06] text-accent'
          : 'border-line-subtle bg-white/[0.02] text-ink-secondary hover:border-line-strong hover:text-ink-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
