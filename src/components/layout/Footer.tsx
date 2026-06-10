import { SITE } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-line-subtle/60 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 text-caption uppercase text-ink-tertiary md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span>© {year} {SITE.name}</span>
          <span className="h-1 w-1 rounded-full bg-ink-tertiary" />
          <span>All rights reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Built with</span>
          <span className="text-ink-secondary">{SITE.builtWith}</span>
        </div>
      </div>
    </footer>
  )
}
