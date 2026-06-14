import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Projects } from '@/components/projects/Projects'
import { Works } from '@/components/works/Works'
import { Advantages } from '@/components/advantages/Advantages'
import { Contact } from '@/components/contact/Contact'
import { useTrackEvent } from '@/hooks/useTrackEvent'

function App() {
  useTrackEvent({ type: 'app_loaded' })
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg-base text-ink-primary">
      {/* 全站背景装饰 */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-accent opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-violet opacity-40"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Works />
        <Advantages />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
