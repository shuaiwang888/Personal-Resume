import { HeroVideo } from './HeroVideo'
import { HeroContent } from './HeroContent'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <HeroVideo />
      <HeroContent />
    </section>
  )
}
