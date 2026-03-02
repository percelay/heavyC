import Image from 'next/image'
import type { HeroContent } from '@/lib/sourcematerial'

type HeroProps = {
  hero: HeroContent
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16" aria-labelledby="hero-headline">
      <Image
        src="/images/hero.jpeg"
        alt={hero.headline}
        fill
        priority
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-headline"
            className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
      </div>
    </section>
  )
}
