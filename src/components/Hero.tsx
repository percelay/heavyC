import Image from 'next/image'
import type { HeroContent } from '@/lib/sourcematerial'

type HeroProps = {
  hero: HeroContent
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24" aria-labelledby="hero-headline">
      <div className="relative mx-auto grid min-h-[78vh] w-full max-w-7xl items-center gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10 rounded-2xl border border-black/10 bg-white/92 p-8 shadow-md sm:p-10">
          <h1
            id="hero-headline"
            className="text-4xl font-semibold leading-tight text-text-main sm:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted sm:text-xl">{hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex justify-center rounded-xl bg-primary px-7 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#services"
              className="inline-flex justify-center rounded-xl border border-primary px-7 py-3 text-base font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-md sm:h-[520px]">
          <Image
            src="/images/hero.jpeg"
            alt={hero.headline}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
