import { cn } from '@/lib/cn'

interface DividerProps {
  className?: string
  withDot?: boolean
}

export function Divider({ className, withDot = false }: DividerProps) {
  return (
    <div
      role="separator"
      aria-hidden
      className={cn(
        'relative flex items-center',
        'before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-line-subtle before:to-transparent',
        className,
      )}
    >
      {withDot && (
        <span className="ml-4 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(124,255,196,0.6)]" />
      )}
    </div>
  )
}
