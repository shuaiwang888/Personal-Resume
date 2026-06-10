import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  className?: string
  children: ReactNode
  withGrid?: boolean
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
  withGrid = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-24 md:py-32 lg:py-36',
        'px-6 md:px-10',
        className,
      )}
    >
      {withGrid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid bg-size-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
      )}
      <div className="relative mx-auto max-w-content">
        {(eyebrow || title || description) && (
          <header className="mb-14 md:mb-20 flex flex-col gap-5">
            {eyebrow && (
              <div className="flex items-center gap-3 text-accent">
                <span className="h-px w-8 bg-accent/60" />
                <span className="font-mono text-caption uppercase tracking-[0.18em]">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-display-md md:text-display-lg text-balance text-ink-primary">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-2xl text-body-lg text-ink-secondary text-pretty">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
