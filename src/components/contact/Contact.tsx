import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download, Send } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ContactChannel } from './ContactChannel'
import { profile } from '@/data/profile'

export function Contact() {
  const reduced = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      {/* 背景：缓慢移动的径向渐变 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(124, 255, 196, 0.12), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(155, 140, 255, 0.12), transparent 50%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid bg-size-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-3 text-accent"
        >
          <span className="h-px w-10 bg-accent/60" />
          <span className="font-mono text-caption uppercase tracking-[0.2em]">
            04 · Let's Talk
          </span>
          <span className="h-px w-10 bg-accent/60" />
        </motion.div>

        <motion.h2
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display-lg md:text-display-xl text-balance text-ink-primary"
        >
          让我们一起
          <br />
          打造下一代<span className="text-gradient-accent">金融 AI</span>
          <br />
          产品
        </motion.h2>

        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-body-lg text-ink-secondary text-pretty"
        >
          {profile.tagline}。如果你正在为金融 / 政企 / 军工场景寻找既懂工程又懂产品的 AI PM，欢迎聊聊。
        </motion.p>

        {/* 主 CTA */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href={`mailto:${profile.email}`} variant="primary">
            <Send className="h-4 w-4" />
            发送邮件
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton
            href={`${import.meta.env.BASE_URL}documents/resume.pdf`}
            variant="ghost"
            // 文件下载：浏览器原生下载，文件名更友好
            anchorProps={{ download: '王帅-AI产品经理-简历.pdf' }}
          >
            <Download className="h-4 w-4" />
            下载简历 PDF
          </MagneticButton>
          <MagneticButton href={`tel:${profile.phone}`} variant="ghost">
            {profile.phone}
          </MagneticButton>
        </motion.div>

        {/* 联系方式卡片 */}
        <div className="mt-16 text-left">
          <ContactChannel />
        </div>
      </div>
    </section>
  )
}
