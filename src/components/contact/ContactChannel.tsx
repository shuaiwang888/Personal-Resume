import { Mail, Phone, MapPin, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { contactChannels } from '@/data/profile'

const ICON_MAP: Record<string, LucideIcon> = { Mail, Phone, MapPin }

export function ContactChannel() {
  const reduced = useReducedMotion()
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {contactChannels.map((c, i) => {
        const Icon = ICON_MAP[c.icon] ?? Mail
        const disabled = c.href === '#'
        return (
          <motion.li
            key={c.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <a
              href={c.href}
              onClick={disabled ? (e) => e.preventDefault() : undefined}
              className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-line-subtle bg-bg-surface/50 px-5 py-4 transition-all hover:border-accent/30 hover:bg-bg-surface"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-subtle bg-bg-elevated text-accent transition-colors group-hover:border-accent/40">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">
                    {c.label}
                  </p>
                  <p className="text-sm text-ink-primary">{c.value}</p>
                </div>
              </div>
              {!disabled && (
                <ArrowUpRight className="h-4 w-4 text-ink-tertiary transition-colors group-hover:text-accent" />
              )}
            </a>
          </motion.li>
        )
      })}
    </ul>
  )
}
