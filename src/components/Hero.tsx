import Image from 'next/image'
import type { HeroContent } from '@/lib/sourcematerial'

type HeroProps = {
  hero: HeroContent
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative isolate flex h-screen items-center justify-center overflow-hidden" aria-labelledby="hero-headline">
      <Image
        src="/images/landscaping.jpg"
        alt={hero.headline}
        fill
        priority
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="relative px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-headline"
          className="text-6xl font-black uppercase leading-none tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl"
        >
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {hero.subheadline}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#quote"
            className="inline-flex justify-center rounded-xl bg-primary px-7 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#services"
            className="inline-flex justify-center rounded-xl border border-white px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}
